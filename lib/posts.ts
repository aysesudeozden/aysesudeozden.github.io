import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

/**
 * Yazılar `content/yazilar/*.md` dosyalarından okunur.
 * Dosya adı = adres:  content/yazilar/ilk-yazim.md  →  /yazilar/ilk-yazim
 * Biçim için content/yazilar/README.md dosyasına bak.
 */

const POSTS_DIR = path.join(process.cwd(), "content", "yazilar");

export type PostMeta = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  summary: string;
  tags: string[];
  lang: "tr" | "en";
  draft: boolean;
  readingMinutes: number;
};

export type Post = PostMeta & { html: string };

/** Basit frontmatter ayrıştırıcı:  anahtar: değer  satırları */
function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {} as Record<string, string>, body: raw };
  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    const key = line.slice(0, i).trim();
    let value = line.slice(i + 1).trim();
    if (/^(["']).*\1$/.test(value)) value = value.slice(1, -1);
    if (key) data[key] = value;
  }
  return { data, body: match[2] };
}

function parseTags(value?: string) {
  if (!value) return [];
  return value
    .replace(/^\[|\]$/g, "")
    .split(",")
    .map((t) => t.trim().replace(/^["']|["']$/g, ""))
    .filter(Boolean);
}

const showDrafts = process.env.NODE_ENV === "development";

function readPost(file: string): Post {
  const slug = file.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const { data, body } = parseFrontmatter(raw);
  const words = body.trim().split(/\s+/).filter(Boolean).length;

  return {
    slug,
    title: data.title || slug,
    date: data.date || "1970-01-01",
    summary: data.summary || "",
    tags: parseTags(data.tags),
    lang: data.lang === "en" ? "en" : "tr",
    draft: data.draft === "true",
    readingMinutes: Math.max(1, Math.round(words / 200)),
    html: marked.parse(body, { async: false, gfm: true }) as string,
  };
}

function postFiles() {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_") && f.toLowerCase() !== "readme.md");
}

export function getAllPosts(): PostMeta[] {
  return postFiles()
    .map(readPost)
    .filter((p) => showDrafts || !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map((p): PostMeta => ({
      slug: p.slug,
      title: p.title,
      date: p.date,
      summary: p.summary,
      tags: p.tags,
      lang: p.lang,
      draft: p.draft,
      readingMinutes: p.readingMinutes,
    }));
}

export function getPost(slug: string): Post | null {
  const file = `${slug}.md`;
  if (!postFiles().includes(file)) return null;
  const post = readPost(file);
  if (post.draft && !showDrafts) return null;
  return post;
}

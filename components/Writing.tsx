"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ui } from "@/content/site";
import type { Post, PostMeta } from "@/lib/posts";
import { BloodCursor } from "@/components/ui";

function formatDate(date: string, lang: "tr" | "en") {
  const d = new Date(`${date}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString(lang === "tr" ? "tr-TR" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

function Meta({ post }: { post: PostMeta }) {
  const { lang, tx } = useLanguage();
  return (
    <span className="font-mono text-[12px] text-dim">
      {formatDate(post.date, lang)} · {post.readingMinutes} {tx(ui.writing.minutes)}
      {post.lang !== lang && <> · {post.lang}</>}
      {post.draft && <span className="text-bordo-text"> · [{tx(ui.writing.draft)}]</span>}
    </span>
  );
}

export function WritingList({ posts }: { posts: PostMeta[] }) {
  const { tx } = useLanguage();

  return (
    <div className="mx-auto max-w-3xl px-5 pb-28 pt-32 sm:px-8 sm:pt-40">
      <p className="font-mono text-[13px] text-muted">
        <span className="text-dim">~/yazilar</span> <span className="text-bordo-text">$</span> ls
      </p>
      <h1 className="mt-4 text-[clamp(2.8rem,8vw,4.5rem)] font-bold leading-none tracking-[-0.03em] text-ink">
        {tx(ui.writing.title)}
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{tx(ui.writing.desc)}</p>

      <div className="mt-14 border-t border-line">
        {posts.length === 0 ? (
          <p className="pt-8 font-mono text-[13px] text-muted">
            {tx(ui.writing.empty)}
            <BloodCursor />
          </p>
        ) : (
          <ul className="divide-y divide-line">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/yazilar/${post.slug}`} className="group block py-7">
                  <Meta post={post} />
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink transition-colors group-hover:text-bordo-text">
                    {post.title}
                  </h2>
                  {post.summary && <p className="mt-2 leading-relaxed text-muted">{post.summary}</p>}
                  {post.tags.length > 0 && (
                    <p className="mt-2 font-mono text-[12px] text-dim">{post.tags.map((t) => `#${t}`).join(" ")}</p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export function PostView({ post }: { post: Post }) {
  const { tx } = useLanguage();

  return (
    <article className="mx-auto max-w-[42rem] px-5 pb-28 pt-32 sm:px-8 sm:pt-40" lang={post.lang}>
      <Link href="/yazilar" className="font-mono text-[12.5px] text-muted transition-colors hover:text-bordo-text">
        ← cd ..
      </Link>

      <header className="mt-10">
        <Meta post={post} />
        <h1 className="mt-3 text-[clamp(2.2rem,6vw,3.4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-ink">
          {post.title}
        </h1>
        {post.summary && <p className="mt-4 text-lg leading-relaxed text-muted">{post.summary}</p>}
      </header>

      <div className="my-10 h-px bg-line" />

      <div className="prose-post" dangerouslySetInnerHTML={{ __html: post.html }} />

      {post.tags.length > 0 && (
        <p className="mt-14 font-mono text-[12px] text-dim">{post.tags.map((t) => `#${t}`).join(" ")}</p>
      )}

      <div className="mt-10 border-t border-line pt-8">
        <Link href="/yazilar" className="font-mono text-[12.5px] text-muted transition-colors hover:text-bordo-text">
          ← {tx(ui.writing.back)}
        </Link>
      </div>
    </article>
  );
}

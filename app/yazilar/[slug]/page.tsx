import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Atmosphere from "@/components/Atmosphere";
import Footer from "@/components/Footer";
import { PostView } from "@/components/Writing";
import { getAllPosts, getPost } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

// Statik dışa aktarım boş liste kabul etmediği için, hiç yazı yokken
// yer tutucu bir adres üretilir (404 gösterir).
const PLACEHOLDER = "_bos";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.length ? posts.map((p) => ({ slug: p.slug })) : [{ slug: PLACEHOLDER }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary || undefined,
    openGraph: { title: post.title, description: post.summary || undefined, type: "article" },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Atmosphere />
      <Header />
      <main>
        <PostView post={post} />
      </main>
      <Footer withContact={false} />
    </>
  );
}

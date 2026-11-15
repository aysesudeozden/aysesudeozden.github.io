import type { Metadata } from "next";
import Header from "@/components/Header";
import Atmosphere from "@/components/Atmosphere";
import Footer from "@/components/Footer";
import { WritingList } from "@/components/Writing";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Yazılar",
  description: "Ayşe Sude Özden'in yazıları ve notları.",
};

export default function WritingPage() {
  const posts = getAllPosts();
  return (
    <>
      <Atmosphere />
      <Header />
      <main>
        <WritingList posts={posts} />
      </main>
      <Footer withContact={false} />
    </>
  );
}

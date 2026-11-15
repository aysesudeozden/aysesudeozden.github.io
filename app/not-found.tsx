import Link from "next/link";
import Atmosphere from "@/components/Atmosphere";

export default function NotFound() {
  return (
    <>
      <Atmosphere />
      <main className="flex min-h-[100svh] items-center justify-center px-5">
        <div className="w-full max-w-md rounded-lg border border-line bg-surface/70 p-6 font-mono text-[13px] leading-7">
          <p className="text-muted">
            <span className="text-bordo-text">$</span> cd ./bu-sayfa
          </p>
          <p className="text-bordo-text">cd: ./bu-sayfa: böyle bir sayfa yok (404)</p>
          <p className="mt-4 text-muted">Taşınmış ya da hiç olmamış olabilir.</p>
          <Link href="/" className="mt-5 inline-block text-ink underline decoration-bordo underline-offset-4 hover:text-bordo-text">
            cd ~
          </Link>
        </div>
      </main>
    </>
  );
}

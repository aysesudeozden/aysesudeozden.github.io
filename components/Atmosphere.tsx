/**
 * Sayfanın arkasındaki atmosfer: silik bir nokta ızgarası, dipte hafif bir
 * bordo, film greni ve kenar kararması. Renkler temaya göre değişir.
 */
export default function Atmosphere() {
  return (
    <>
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="dot-grid absolute inset-0"
          style={{
            maskImage: "radial-gradient(ellipse 90% 70% at 50% 30%, #000 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 30%, #000 30%, transparent 80%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 70% 40% at 50% 112%, rgb(var(--bordo) / var(--haze)), transparent 70%)" }}
        />
      </div>

      <div aria-hidden className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
        <div className="film-grain absolute -inset-[50%] animate-grain" />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, transparent 55%, var(--vignette) 100%)" }}
        />
      </div>
    </>
  );
}

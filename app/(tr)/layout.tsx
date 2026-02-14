import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TurkishLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const links = [
        { href: "/hakkimda", label: "Hakkımda" },
        { href: "/projeler", label: "Projeler" },
        { href: "/iletisim", label: "İletişim" },
    ];
    const langSwitch = { href: "/en", label: "EN" };

    return (
        <>
            <Navbar brandLink="/" links={links} langSwitch={langSwitch} />
            {children}
            <Footer gameLink="/game-tr" gameText="Oyun oynayalım!" />
        </>
    );
}

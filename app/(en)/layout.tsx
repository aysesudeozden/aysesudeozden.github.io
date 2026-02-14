import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function EnglishLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const links = [
        { href: "/aboutme", label: "About Me" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact" },
    ];
    const langSwitch = { href: "/", label: "TR" };

    return (
        <>
            <Navbar brandLink="/en" links={links} langSwitch={langSwitch} />
            {children}
            <Footer gameLink="/game" gameText="LET'S PLAY A GAME!" />
        </>
    );
}

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

type NavbarProps = {
    brandLink: string;
    links: { href: string; label: string }[];
    langSwitch: { href: string; label: string };
};

export default function Navbar({ brandLink, links, langSwitch }: NavbarProps) {
    return (
        <nav>
            <div className="brand"><Link href={brandLink}>A. SUDE ÖZDEN</Link></div>
            <ul>
                {links.map((link) => (
                    <li key={link.href}><span><Link href={link.href}>{link.label}</Link></span></li>
                ))}
                <li><span><Link href={langSwitch.href}>{langSwitch.label}</Link></span></li>
                <li>
                    <ThemeToggle />
                </li>
            </ul>
        </nav>
    );
}

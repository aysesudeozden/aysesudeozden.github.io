'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

type NavbarProps = {
    brandLink: string;
    links: { href: string; label: string }[];
    langSwitch: { href: string; label: string };
};

export default function Navbar({ brandLink, links, langSwitch }: NavbarProps) {
    const pathname = usePathname();

    const getOppositeLangUrl = (currentPath: string) => {
        // TR to EN
        if (currentPath === '/' || currentPath === '/tr') return '/en';
        if (currentPath === '/hakkimda') return '/aboutme';
        if (currentPath === '/projeler') return '/projects';
        if (currentPath === '/iletisim') return '/contact';
        if (currentPath === '/game-tr') return '/game';

        // EN to TR
        if (currentPath === '/en') return '/';
        if (currentPath.startsWith('/aboutme')) return '/hakkimda';
        if (currentPath.startsWith('/projects')) return '/projeler';
        if (currentPath.startsWith('/contact')) return '/iletisim';
        if (currentPath.startsWith('/game')) return '/game-tr';

        // Default fallback (if on 404 or unmapped route)
        return langSwitch.href;
    };

    const targetLangUrl = getOppositeLangUrl(pathname || '');

    return (
        <nav>
            <div className="brand"><Link href={brandLink}>A. SUDE ÖZDEN</Link></div>
            <ul>
                {links.map((link) => (
                    <li key={link.href}><span><Link href={link.href}>{link.label}</Link></span></li>
                ))}
                <li><span><Link href={targetLangUrl}>{langSwitch.label}</Link></span></li>
                <li>
                    <ThemeToggle />
                </li>
            </ul>
        </nav>
    );
}

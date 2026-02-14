import Link from 'next/link';

type FooterProps = {
    gameLink: string;
    gameText: string;
};

export default function Footer({ gameLink, gameText }: FooterProps) {
    return (
        <footer>
            <p style={{ fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>
                {/* Empty p tag in original? Or "İLETİŞİME GEÇ" in subpages? Home page has empty p. */}
                {/* I will handle this logic in page content if necessary, or pass distinct footers. */}
                {/* Original index.html footer: empty p, then game link. */}
                {/* Original hakkimda.html footer: "İLETİŞİME GEÇ", then mail link. */}
                {/* This implies different footers per page type (Home vs Subpage). */}
                {/* But user wants components. Layout footer is shared? */}
                {/* The home page footer is different from subpage footer. */}
            </p>
            {/* For Home Layout, we use the Game Link footer. */}
            <Link href={gameLink} style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem' }}>
                {gameText === "LET'S PLAY A GAME!" ? <u>{gameText}</u> : gameText}
            </Link>
            <br /><br />
            <p style={{ opacity: 0.6, fontSize: '0.7rem' }}>&copy; 2025 AYŞE SUDE ÖZDEN. {gameText.includes("Game") || gameText.includes("GAME") ? "ALL RIGHTS RESERVED." : "TÜM HAKLARI SAKLIDIR."}</p>
        </footer>
    );
}

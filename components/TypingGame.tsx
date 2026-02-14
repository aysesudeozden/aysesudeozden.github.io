'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const trWordsBeg = ["elma", "masa", "kedi", "su", "yol", "kitap", "kalem", "deniz", "güneş", "ayna", "ev", "okul", "kapı", "çay", "kahve", "bulut", "ağaç", "kuş", "çiçek", "şehir", "gece", "sabah", "insan", "zaman", "hayat", "ışık", "rüzgar", "mavi", "yeşil", "beyaz", "siyah", "çocuk", "anne", "baba", "arkadaş", "sevgi", "yemek", "uyku", "spor", "yazı"];

const trWordsPro = ["bilgisayar", "kütüphane", "öğretmen", "gelecek", "tecrübe", "özgürlük", "heyecan", "gökyüzü", "arkadaşlık", "merhamet", "başarı", "yetenek", "programlama", "teknoloji", "cumhuriyet", "istatistik", "psikoloji", "felsefe", "edebiyat", "araştırma", "bağımsızlık", "sorumluluk", "gelişim", "medeniyet", "kararlılık", "hayalperest", "yaratıcılık", "mücadele", "dayanışma", "farkındalık"];

type TypingGameProps = {
    lang: 'tr' | 'en';
};

export default function TypingGame({ lang }: TypingGameProps) {
    const [words, setWords] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [correctWordsCount, setCorrectWordsCount] = useState(0);
    const [submittedWordsCount, setSubmittedWordsCount] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [isActive, setIsActive] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [duration, setDuration] = useState(60);
    const [difficulty, setDifficulty] = useState(1); // 1: Beg, 2: Pro
    const [wordStatuses, setWordStatuses] = useState<('current' | 'correct' | 'wrong' | 'pending')[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);
    const textDisplayRef = useRef<HTMLDivElement>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const labels = lang === 'tr' ? {
        time: "Süre",
        words: "Kelime",
        restart: "Yeniden Başlat",
        placeholder: "yazmaya başlayın...",
        loading: "Yükleniyor...",
        accuracy: "DOĞRULUK",
        wpm: "DKS (WPM)",
        beg: "BAŞLANGIÇ",
        pro: "İLERİ",
        switchLink: "/game",
        switchText: "EN",
        sixty: "60SN",
        onetwenty: "120SN"
    } : {
        time: "Time",
        words: "Words",
        restart: "Restart",
        placeholder: "type here...",
        loading: "Loading words...",
        accuracy: "ACCURACY",
        wpm: "WPM",
        beg: "BEG",
        pro: "PRO",
        switchLink: "/game-tr",
        switchText: "TR",
        sixty: "60S",
        onetwenty: "120S"
    };

    const loadWords = async () => {
        setWords([]);
        setWordStatuses([]);

        let newWords: string[] = [];
        if (lang === 'tr') {
            const pool = difficulty === 1 ? trWordsBeg : trWordsPro;
            for (let i = 0; i < 100; i++) {
                newWords.push(pool[Math.floor(Math.random() * pool.length)]);
            }
        } else {
            try {
                const len = difficulty === 1 ? 5 : 8;
                const res = await fetch(`https://random-word-api.herokuapp.com/word?number=100&length=${len}`);
                newWords = await res.json();
            } catch (e) {
                newWords = ["connection", "error", "please", "retry"];
            }
        }

        setWords(newWords);
        setWordStatuses(new Array(newWords.length).fill('pending').map((_, i) => i === 0 ? 'current' : 'pending'));
        if (inputRef.current) inputRef.current.focus();
    };

    useEffect(() => {
        loadWords();
    }, [lang, difficulty]);

    useEffect(() => {
        if (isActive && timeLeft > 0) {
            timerRef.current = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0 && isActive) {
            endGame();
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isActive, timeLeft]);

    const endGame = () => {
        setIsActive(false);
        setIsFinished(true);
        if (timerRef.current) clearInterval(timerRef.current);
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isFinished) return;
        if (!isActive && inputValue.length === 0) {
            setIsActive(true);
        }

        const val = e.target.value;
        setInputValue(val);

        if (val.endsWith(' ')) {
            const wordEntered = val.trim();
            const currentWord = words[currentWordIndex];

            const newStatuses = [...wordStatuses];
            if (wordEntered === currentWord) {
                setCorrectWordsCount((prev) => prev + 1);
                newStatuses[currentWordIndex] = 'correct';
            } else {
                newStatuses[currentWordIndex] = 'wrong';
            }

            setSubmittedWordsCount((prev) => prev + 1);
            setCurrentWordIndex((prev) => prev + 1);
            if (currentWordIndex + 1 < newStatuses.length) {
                newStatuses[currentWordIndex + 1] = 'current';
            }
            setWordStatuses(newStatuses);
            setInputValue('');

            // Auto scroll
            // Simple implementation: if index is > 0 and index % line_length == 0
            // Ideally we check DOM element positions.
            // For now, let's rely on CSS transition if we can calculate it, 
            // but React state update doesn't give us DOM refs easily for each span.
            // We can use a simple scroll based on index or just let it flow. 
            // The original code used offsetTop.
            // We'll implement a basic visual scroll if needed, or rely on overflow hidden and current word view.
            // Let's try to find the current span in DOM.
            setTimeout(() => {
                const activeSpan = document.getElementById(`word-${currentWordIndex + 1}`);
                if (textDisplayRef.current && activeSpan) {
                    if (activeSpan.offsetTop > 30) {
                        textDisplayRef.current.style.transform = `translateY(-${activeSpan.offsetTop - 5}px)`;
                    }
                }
            }, 0);
        }
    };

    const resetGame = () => {
        setIsActive(false);
        setIsFinished(false);
        setTimeLeft(duration);
        setCorrectWordsCount(0);
        setSubmittedWordsCount(0);
        setCurrentWordIndex(0);
        setInputValue('');
        if (textDisplayRef.current) textDisplayRef.current.style.transform = "translateY(0px)";
        loadWords();
    };

    const getWPM = () => Math.floor(correctWordsCount / (duration / 60));
    const getAccuracy = () => submittedWordsCount === 0 ? 0 : Math.floor((correctWordsCount / submittedWordsCount) * 100);

    return (
        <>
            <header className="header-nav" style={{ marginTop: '70px', borderBottom: '1px solid rgba(243, 239, 224, 0.1)' }}>
                <div></div> {/* Brand is in main Navbar, here we just need the right side settings or empty left */}
                <div className="settings-box">
                    <div className="lang-switch" style={{ borderRight: '1px solid rgba(243, 239, 224, 0.2)', paddingRight: '15px' }}>
                        <Link href={labels.switchLink}>{labels.switchText}</Link>
                    </div>
                    <div className="timer-select">
                        <button
                            className={duration === 60 ? 'active' : ''}
                            onClick={() => { setDuration(60); setTimeLeft(60); setIsActive(false); }}
                        >{labels.sixty}</button>
                        {' | '}
                        <button
                            className={duration === 120 ? 'active' : ''}
                            onClick={() => { setDuration(120); setTimeLeft(120); setIsActive(false); }}
                        >{labels.onetwenty}</button>
                    </div>
                    <div style={{ marginLeft: '20px' }} className="diff-select">
                        <button
                            className={difficulty === 1 ? 'active' : ''}
                            onClick={() => { setDifficulty(1); setIsActive(false); }}
                        >{labels.beg}</button>
                        {' | '}
                        <button
                            className={difficulty === 2 ? 'active' : ''}
                            onClick={() => { setDifficulty(2); setIsActive(false); }}
                        >{labels.pro}</button>
                    </div>
                </div>
            </header>

            <main className="game-container">
                <div className="stats-wrapper">
                    <div className="stat-block">
                        <div className="stat-label">{isFinished ? (lang === 'tr' ? 'DOĞRULUK' : 'ACCURACY') : labels.time}</div>
                        <div className="stat-value">
                            {isFinished ? `%${getAccuracy()}` : timeLeft}
                        </div>
                    </div>
                    <div className="stat-block">
                        <div className="stat-label">{isFinished ? (lang === 'tr' ? 'DKS (WPM)' : 'WPM') : labels.words}</div>
                        <div className="stat-value">
                            {isFinished ? getWPM() : correctWordsCount}
                        </div>
                    </div>
                </div>

                <div className="text-window">
                    <div id="textDisplay" ref={textDisplayRef} style={{ marginTop: '0px' }}>
                        {words.length === 0 ? labels.loading : words.map((word, idx) => (
                            <span
                                key={idx}
                                id={`word-${idx}`}
                                className={`word-span ${wordStatuses[idx]}`}
                            >
                                {word}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="input-wrapper" style={{ textAlign: 'center' }}>
                    <input
                        ref={inputRef}
                        type="text"
                        id="textInput"
                        autoFocus
                        autoComplete="off"
                        placeholder={labels.placeholder}
                        value={inputValue}
                        onChange={handleInput}
                        disabled={isFinished}
                    />
                </div>

                <button className="btn-restart" onClick={resetGame}>
                    {labels.restart}
                </button>
            </main>
        </>
    );
}

"use client";

import { useState, useEffect, useCallback } from "react";

/* ───────── Typing hook ───────── */
function useTypingEffect(
  lines: string[],
  charSpeed = 40,
  lineDelay = 600,
  startDelay = 0
) {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [cursorLine, setCursorLine] = useState(0);
  const [cursorChar, setCursorChar] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (cursorLine >= lines.length) {
        setDone(true);
        return;
      }

      const currentFullLine = lines[cursorLine];

      if (cursorChar < currentFullLine.length) {
        setDisplayed((prev) => {
          const copy = [...prev];
          copy[cursorLine] = currentFullLine.slice(0, cursorChar + 1);
          return copy;
        });
        setCursorChar((c) => c + 1);
      } else {
        // line finished → move to next
        setCursorLine((l) => l + 1);
        setCursorChar(0);
        setDisplayed((prev) => [...prev, ""]);
      }
    }, cursorChar === 0 && cursorLine > 0 ? lineDelay : cursorLine === 0 && cursorChar === 0 ? startDelay : charSpeed);

    return () => clearTimeout(timeout);
  }, [cursorLine, cursorChar, lines, charSpeed, lineDelay, startDelay]);

  return { displayed, cursorLine, cursorChar, done };
}

/* ───────── Syntax highlighter (simple) ───────── */
function highlightCode(line: string) {
  // Keywords
  let html = line
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // strings (double quotes)
  html = html.replace(
    /(&quot;|")(.*?)(&quot;|")/g,
    '<span class="text-[#c9a96e]">"$2"</span>'
  );
  // keywords
  html = html.replace(
    /\b(const|let|var|function|return|import|from|export|default|true|false)\b/g,
    '<span class="text-[#7b8db8]">$1</span>'
  );
  // property keys (word before colon)
  html = html.replace(
    /(\s+)(\w+)(:\s)/g,
    '$1<span class="text-[#f0e7d5]">$2</span>$3'
  );
  // brackets
  html = html.replace(
    /([{}[\]()])/g,
    '<span class="text-[#5a6a8a]">$1</span>'
  );
  // comments
  html = html.replace(
    /(\/\/.*)/g,
    '<span class="text-[#4a5568] italic">$1</span>'
  );

  return html;
}

/* ───────── Code Editor Window ───────── */
function CodeEditor() {
  const codeLines = [
    'const sude = {',
    '  role: "Frontend Developer",',
    '  stack: ["React", "Next.js", "TS"],',
    '  loves: "Building cool UIs",',
    '  coffee: true,',
    '};',
  ];

  const { displayed, cursorLine, done } = useTypingEffect(
    codeLines, 35, 400, 800
  );

  return (
    <div className="relative rounded-xl overflow-hidden border border-[#2e3656] shadow-[0_8px_32px_rgba(0,0,0,0.4)] bg-[#1a1f35] w-full max-w-[340px]">
      {/* Scanline overlay */}
      <div className="pointer-events-none absolute inset-0 z-20 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(201,169,110,0.08) 2px, rgba(201,169,110,0.08) 4px)",
        }}
      />

      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#151a2e] border-b border-[#2e3656]">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="ml-2 text-[10px] text-[#5a6a8a] font-mono tracking-wider">
          sude.ts
        </span>
        <div className="ml-auto flex gap-3 text-[#3a4560] text-[9px] font-mono">
          <span>UTF-8</span>
          <span>TypeScript</span>
        </div>
      </div>

      {/* Code area */}
      <div className="p-4 font-mono text-[11px] leading-[1.7] min-h-[160px]">
        {displayed.map((line, i) => (
          <div key={i} className="flex">
            <span className="w-6 text-right mr-3 text-[#3a4560] select-none text-[10px]">
              {i + 1}
            </span>
            <span
              dangerouslySetInnerHTML={{ __html: highlightCode(line) }}
              className="text-[#8a95aa]"
            />
            {i === cursorLine && !done && (
              <span className="inline-block w-[6px] h-[14px] bg-[#c9a96e] ml-[1px] animate-pulse" />
            )}
          </div>
        ))}
        {done && (
          <div className="flex">
            <span className="w-6 text-right mr-3 text-[#3a4560] select-none text-[10px]">
              {codeLines.length + 1}
            </span>
            <span className="inline-block w-[6px] h-[14px] bg-[#c9a96e] ml-[1px] animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}

/* ───────── Terminal Window ───────── */
function Terminal() {
  const terminalLines = [
    '$ whoami',
    '  sude.özden',
    '$ cat skills.txt',
    '  react next.js typescript python',
    '$ npm run portfolio',
    '  ✓ Ready on localhost:3000',
  ];

  const { displayed, cursorLine, done } = useTypingEffect(
    terminalLines, 30, 700, 2000
  );

  const renderLine = useCallback((line: string, index: number) => {
    const isCommand = line.startsWith('$');
    const isOutput = line.startsWith('  ');

    if (isCommand) {
      return (
        <>
          <span className="text-[#c9a96e]">$ </span>
          <span className="text-[#f0e7d5]">{line.slice(2)}</span>
        </>
      );
    }
    if (isOutput) {
      // Check for success indicator
      if (line.includes('✓')) {
        return <span className="text-[#28c840]">{line}</span>;
      }
      return <span className="text-[#8a95aa]">{line}</span>;
    }
    return <span className="text-[#f0e7d5]">{line}</span>;
  }, []);

  return (
    <div className="relative rounded-xl overflow-hidden border border-[#2e3656] shadow-[0_8px_32px_rgba(0,0,0,0.4)] bg-[#12162a] w-full max-w-[340px]">
      {/* Scanline overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-20 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(201,169,110,0.1) 2px, rgba(201,169,110,0.1) 4px)",
        }}
      />

      {/* CRT glow edge */}
      <div className="pointer-events-none absolute inset-0 z-10 rounded-xl shadow-[inset_0_0_30px_rgba(201,169,110,0.03)]" />

      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0e1225] border-b border-[#2e3656]">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="ml-2 text-[10px] text-[#5a6a8a] font-mono tracking-wider flex items-center gap-1.5">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#c9a96e]">
            <polyline points="4 17 10 11 4 5" />
            <line x1="12" y1="19" x2="20" y2="19" />
          </svg>
          bash
        </span>
      </div>

      {/* Terminal content */}
      <div className="p-4 font-mono text-[11px] leading-[1.8] min-h-[160px]">
        {displayed.map((line, i) => (
          <div key={i} className="flex items-center">
            <span>{renderLine(line, i)}</span>
            {i === cursorLine && !done && (
              <span className="inline-block w-[6px] h-[14px] bg-[#c9a96e] ml-[1px] animate-pulse" />
            )}
          </div>
        ))}
        {done && (
          <div className="flex items-center">
            <span className="text-[#c9a96e]">$ </span>
            <span className="inline-block w-[6px] h-[14px] bg-[#c9a96e] ml-[1px] animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}

/* ───────── Main Export ───────── */
export default function HeroTerminal() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full max-w-[400px] h-[380px]" />;
  }

  return (
    <div className="relative w-full max-w-[400px] h-[380px]">
      {/* Code Editor — top left, slightly tilted */}
      <div
        className="absolute top-0 left-0 z-20 transition-transform duration-700 ease-out hover:scale-[1.02] hover:-rotate-[0.5deg]"
        style={{
          transform: "rotate(-2deg)",
          animation: "floatUp 6s ease-in-out infinite",
        }}
      >
        <CodeEditor />
      </div>

      {/* Terminal — bottom right, slightly tilted other way */}
      <div
        className="absolute bottom-0 right-0 z-10 transition-transform duration-700 ease-out hover:scale-[1.02] hover:rotate-[0.5deg]"
        style={{
          transform: "rotate(1.5deg)",
          animation: "floatDown 6s ease-in-out infinite",
        }}
      >
        <Terminal />
      </div>

      {/* Ambient glow behind */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.06),transparent_70%)] blur-xl" />
    </div>
  );
}

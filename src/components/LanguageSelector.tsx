import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface Language {
  code: string;
  name: string;
}

const languages: Language[] = [
  { code: "EN", name: "English" },
  { code: "हि", name: "Hindi" },
  { code: "తె", name: "Telugu" },
  { code: "த", name: "Tamil" },
];

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (language: Language) => {
    setSelected(language);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-white transition-all"
        style={{
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(10px)",
        }}
      >
        <span>{selected.code}</span>
        <ChevronDown 
          className="w-4 h-4 transition-transform" 
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      {isOpen && (
        <div
          className="absolute top-full right-0 mt-2 rounded-xl shadow-lg overflow-hidden z-50"
          style={{
            background: "var(--finvoice-white)",
            minWidth: "140px",
          }}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang)}
              className="w-full px-4 py-3 text-left transition-colors flex items-center justify-between"
              style={{
                background: selected.code === lang.code 
                  ? "var(--finvoice-blue-100)" 
                  : "transparent",
                color: "var(--finvoice-blue-900)",
              }}
            >
              <span>{lang.name}</span>
              <span>{lang.code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

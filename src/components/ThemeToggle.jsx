import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

useEffect(() => {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") setDark(true);
  if (saved === "light") setDark(false);
}, []);

useEffect(() => {
  const root = document.documentElement;
  if (dark) {
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    root.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}, [dark]);

return (
  <button
    onClick={() => setDark(!dark)}
    className="px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl hover:bg-white/20 transition"
  >
    {dark ? "Light Mode" : "Dark Mode"}
  </button>
);
}
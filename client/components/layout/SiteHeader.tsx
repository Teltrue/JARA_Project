import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Search, Bell } from "lucide-react";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors",
        scrolled
          ? "bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60"
          : "bg-gradient-to-b from-black/70 to-transparent",
      )}
    >
      <div className="px-4 sm:px-8 max-w-7xl mx-auto h-16 flex items-center gap-6">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="inline-block h-6 w-6 bg-primary rotate-12" />
          <span className="font-extrabold tracking-wider text-white text-lg hidden sm:inline">
            JARA
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-4 text-sm text-white/80">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/dashboard" className="hover:text-white transition-colors">
            Dashboard
          </Link>
          <Link to="/pages" className="hover:text-white transition-colors">
            Pages
          </Link>
          <Link
            to="/payment-links"
            className="hover:text-white transition-colors"
          >
            Payment Links
          </Link>
          <Link to="/ai" className="hover:text-white transition-colors">
            AI
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <button
            aria-label="Search"
            className="text-white/80 hover:text-white"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            aria-label="Notifications"
            className="text-white/80 hover:text-white"
          >
            <Bell className="h-5 w-5" />
          </button>
          <div className="h-8 w-8 rounded bg-white/10 ring-1 ring-white/20 flex items-center justify-center text-white text-xs">
            SA
          </div>
        </div>
      </div>
    </header>
  );
}

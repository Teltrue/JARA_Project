import { useRef } from "react";
import type { Movie } from "@/data/movies";
import { ChevronLeft, ChevronRight, CirclePlus, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

function MovieCard({ movie, onPlay }: { movie: Movie; onPlay: (m: Movie) => void }) {
  return (
    <div className="group relative aspect-[2/3] w-40 sm:w-44 md:w-48 shrink-0 rounded overflow-hidden">
      <img
        src={movie.poster}
        alt={movie.title}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute inset-x-2 bottom-2 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex gap-2">
          <Button size="icon" className="bg-white text-black hover:bg-white/90">
            <Play />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="bg-white/20 text-white hover:bg-white/30"
          >
            <CirclePlus />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function Row({
  title,
  movies,
}: {
  title: string;
  movies: Movie[];
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: -1 | 1) => () => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9 * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="relative">
      <h2 className="px-4 sm:px-8 max-w-7xl mx-auto mb-3 text-lg sm:text-xl font-semibold">
        {title}
      </h2>
      <div className="relative">
        <button
          aria-label="Scroll left"
          onClick={scroll(-1)}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black"
        >
          <ChevronLeft />
        </button>
        <div
          ref={scrollerRef}
          className="no-scrollbar pl-4 sm:pl-8 max-w-7xl mx-auto flex gap-3 overflow-x-auto scroll-smooth"
        >
          {movies.map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))}
        </div>
        <button
          aria-label="Scroll right"
          onClick={scroll(1)}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}

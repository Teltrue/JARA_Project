import { useMemo, useState } from "react";
import { featured } from "@/data/movies";
import { Button } from "@/components/ui/button";
import { Info, Play, Volume2, VolumeX } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const VIDEO_ID = "dBf8bDeWdP8";

export default function HeroVideo() {
  const [muted, setMuted] = useState(true);
  const src = useMemo(() => {
    const base = `https://www.youtube.com/embed/${VIDEO_ID}`;
    const params = new URLSearchParams({
      autoplay: "1",
      mute: muted ? "1" : "0",
      controls: "0",
      rel: "0",
      loop: "1",
      playlist: VIDEO_ID,
      modestbranding: "1",
      playsinline: "1",
      showinfo: "0",
      iv_load_policy: "3",
      disablekb: "1",
      fs: "0",
    });
    return `${base}?${params.toString()}`;
  }, [muted]);

  return (
    <section className="relative aspect-[16/9] w-full">
      <div className="absolute inset-0">
        <iframe
          title="Hero trailer"
          className="h-full w-full object-cover"
          src={src}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen={false}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 h-full flex items-end pb-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">{featured.title}</h1>
          <p className="mt-3 text-white/80">{featured.overview}</p>
          <div className="mt-6 flex flex-wrap gap-3 items-center">
            <Button variant="secondary" className="bg-white text-black hover:bg-white/90">
              <Play className="mr-2" /> Play
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" className="bg-white/10 hover:bg-white/20 text-white">
                  <Info className="mr-2" /> More Info
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-neutral-950 text-white border-white/10">
                <DialogHeader>
                  <DialogTitle className="text-xl">{featured.title}</DialogTitle>
                  <DialogDescription className="text-white/70">
                    {featured.year} • {featured.rating} • {featured.duration}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-3">
                  <img src={featured.backdrop} alt="Backdrop" className="w-full rounded" />
                  <p className="text-white/80">{featured.overview}</p>
                </div>
              </DialogContent>
            </Dialog>
            <button
              aria-label={muted ? "Unmute trailer" : "Mute trailer"}
              onClick={() => setMuted((m) => !m)}
              className="ml-2 inline-flex items-center justify-center rounded-full bg-black/60 text-white h-10 w-10 ring-1 ring-white/20 hover:bg-black/80"
            >
              {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

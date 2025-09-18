import { Dialog, DialogContent } from "@/components/ui/dialog";

export interface PlayerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  src: string;
  poster?: string;
}

export default function Player({ open, onOpenChange, title, src, poster }: PlayerProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="left-0 top-0 translate-x-0 translate-y-0 w-screen h-screen max-w-none p-0 bg-black border-0 rounded-none">
        <div className="relative w-full h-full bg-black">
          <video
            src={src}
            poster={poster}
            controls
            autoPlay
            playsInline
            className="h-full w-full object-contain md:object-contain bg-black"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none">
            <h3 className="text-white text-base sm:text-lg font-semibold line-clamp-2">{title}</h3>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

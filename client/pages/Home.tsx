import HeroVideo from "@/components/netflix/HeroVideo";
import Row from "@/components/netflix/Row";
import { rows } from "@/data/movies";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <HeroVideo />
      <div className="space-y-8 py-8">
        {rows.map((r) => (
          <Row key={r.title} title={r.title} movies={r.movies} />
        ))}
      </div>
    </div>
  );
}

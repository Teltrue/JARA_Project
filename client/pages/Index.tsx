import { DemoResponse } from "@shared/api";
import { useEffect, useState } from "react";

import Banner from "@/components/netflix/Banner";
import Row from "@/components/netflix/Row";
import { rows } from "@/data/movies";

export default function Index() {
  return (
    <div className="space-y-8">
      <Banner />
      <div className="space-y-8">
        {rows.map((r) => (
          <Row key={r.title} title={r.title} movies={r.movies} />
        ))}
      </div>
    </div>
  );
}

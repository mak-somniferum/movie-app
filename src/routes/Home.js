import { useCallback, useState } from "react";
import MovieList from "../components/MovieList";
import Sorting from "../components/Sorting";
import "../css/Home.css";

function Home() {
  const [sorting, setSorting] = useState("");
  const onSelect = useCallback(sorting => setSorting(sorting), []);
  
  return (
    <section className="container">
      <Sorting sorting={sorting} onSelect={onSelect} />
      <MovieList sorting={sorting} />
    </section>
  );
}

export default Home;

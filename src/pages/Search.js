import { useFetch } from "../hooks/useFetch";
import { Card } from "../components/Card";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import {useTitle} from "../hooks/useTitle";
export const Search = ({apipath}) => {
  const [searchparams]=useSearchParams();
  const queryTerm=searchparams.get("q");
  const {data:movies}=useFetch(apipath,queryTerm);
  useTitle(`Search result for ${queryTerm}`);
  return (
    <main>
      <section>
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies.length===0 ? `No result found for '${queryTerm}'` : `Result for '${queryTerm}'`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie)=>(
            <Card key={movie.id} movie={movie} />
          ))}
            <Card/>
        </div>
      </section>
    </main>
  )
}



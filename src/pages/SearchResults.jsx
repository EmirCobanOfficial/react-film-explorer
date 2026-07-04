import React, { useEffect, useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/loading";
import MovieList from "../components/MovieList";
import Pagination from "../components/pagination";
import { useSearchParams } from "react-router";

const apiUrl = "https://api.themoviedb.org/3";
const api_key = import.meta.env.VITE_TMDB_API_KEY;
const language = "en-US";

function SearchResults() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalPages, setTotalPages] = useState(0);

  const query = searchParams.get("q");
  const page = searchParams.get("page") || 1;

  useEffect(() => {
    async function getMovies() {
      setLoading(true);
      try {
        const response = await fetch(
          `${apiUrl}/search/movie?api_key=${api_key}&query=${query}&page=${page}&language=${language}`
        );

        if (!response.ok) {
          throw new Error("Hata Oluştu (Error)");
        }

        const data = await response.json();

        if (data.results) {
          setMovies(data.results);
          setTotalPages(data.total_pages);
        }
        setError("");
      } catch (error) {
        setError(error.message);
      }

      setLoading(false);
    }

    getMovies();
  }, [searchParams, page, query]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <>
      <MovieList movies={movies} title={`Search Results: ${query}`} />
      <div>
        <Pagination
          page={page}
          setSearchParams={setSearchParams}
          query={query}
          totalPages={totalPages}
        />
      </div>
    </>
  );
}
export default SearchResults;

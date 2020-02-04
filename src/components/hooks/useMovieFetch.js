import { useState, useEffect, useCallback } from "react";

// Config
import { API_URL, API_KEY } from "../../config";

export const useMovieFetch = movieId => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setError(false);
    setLoading(true);

    try {
      const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
      const result = await (await fetch(endpoint)).json();
      const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
      const creditsResult = await (await fetch(creditsEndpoint)).json();
      const directors = creditsResult.crew.filter(
        member => member.job === "Director"
      );
      const writers = creditsResult.crew.filter(
        member => member.job === "Screenplay"
      );
      const producers = creditsResult.crew.filter(
        member => member.job === "Producer"
      );
      setMovie({
        ...result,
        actors: creditsResult.cast,
        directors,
        writers,
        producers
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }, [movieId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [movie, loading, error];
};

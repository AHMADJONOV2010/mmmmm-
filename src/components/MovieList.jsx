
import MovieCard from "./MovieCard";

function MovieList({ movies, favorites, onFavorite, onWatch }) {
  if (movies.length === 0) {
    return <p className="empty-message">Kino topilmadi.</p>;
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={favorites.includes(movie.id)}
          onFavorite={onFavorite}
          onWatch={onWatch}
        />
      ))}
    </div>
  );
}

export default MovieList;

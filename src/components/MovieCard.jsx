
function MovieCard({ movie, isFavorite, onFavorite, onWatch }) {
  return (
    <article className="movie-card">
      <div className="movie-poster">
        <img src={movie.poster} alt={movie.title} />

        <span className="movie-rating">★ {movie.rating}</span>

        <button
          className={`favorite-btn ${isFavorite ? "favorited" : ""}`}
          onClick={() => onFavorite(movie.id)}
          aria-label="Sevimlilarga qo‘shish"
        >
          {isFavorite ? "♥" : "♡"}
        </button>

        <button className="poster-play" onClick={() => onWatch(movie)}>
          ▶
        </button>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <div className="movie-meta">
          <span>{movie.year}</span>
          <span>{movie.genre}</span>
        </div>
      </div>
    </article>
  );
}

export default MovieCard;

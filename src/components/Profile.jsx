
import MovieList from "./MovieList";

function Profile({ favorites, movies, onFavorite, onWatch }) {
  const savedMovies = movies.filter((movie) =>
    favorites.includes(movie.id)
  );

  return (
    <section className="profile-page">
      <div className="profile-header">
        <div className="avatar">C</div>
        <div>
          <span className="section-kicker">MY ACCOUNT</span>
          <h1>CinePulse User</h1>
          <p>Kino ishqibozi</p>
        </div>
      </div>

      <div className="profile-stats">
        <div><strong>{favorites.length}</strong><span>Sevimli kino</span></div>
        <div><strong>VIP</strong><span>Hisob turi</span></div>
        <div><strong>2026</strong><span>A'zo bo‘lgan yil</span></div>
      </div>

      <h2 className="section-title">Saqlangan kinolar</h2>

      <MovieList
        movies={savedMovies}
        favorites={favorites}
        onFavorite={onFavorite}
        onWatch={onWatch}
      />
    </section>
  );
}

export default Profile;

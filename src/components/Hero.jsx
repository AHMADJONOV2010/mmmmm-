
function Hero({ onExplore }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-tag">✦ CINEPULSE ORIGINAL</span>
        <h1>Har bir kadrda<br /><span>yangi olam.</span></h1>
        <p>
          Sevimli filmlaringiz, yangi seriallar va unutilmas
          kino lahzalari — barchasi bir joyda.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn" onClick={onExplore}>
            Kinolarni ko‘rish <span>→</span>
          </button>
          <span className="hero-note">YOUR CINEMA. YOUR WORLD.</span>
        </div>
      </div>

      <div className="hero-decoration">
        <div className="hero-circle">C</div>
        <span className="hero-orbit orbit-one"></span>
        <span className="hero-orbit orbit-two"></span>
        <span className="hero-glow"></span>
      </div>
    </section>
  );
}

export default Hero;

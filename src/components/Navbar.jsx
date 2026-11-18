
import { useEffect, useState } from "react";

function Navbar({ activePage, onNavigate, search, setSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Escape bosilganda mobil menyuni yopamiz
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const navItems = [
    { id: "home", label: "Bosh sahifa" },
    { id: "movies", label: "Kinolar" },
    { id: "series", label: "Seriallar" },
    { id: "profile", label: "Profil" },
  ];

  function handleNavigate(page) {
    onNavigate(page);
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <button
        className="navbar-logo"
        onClick={() => handleNavigate("home")}
        aria-label="CinePulse bosh sahifa"
      >
        <span className="logo-icon">C</span>
        <span>CINE<span className="logo-accent">PULSE</span></span>
      </button>

      <nav className={`navbar-links ${menuOpen ? "show-menu" : ""}`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-link ${
              activePage === item.id ? "active" : ""
            }`}
            onClick={() => handleNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="navbar-actions">
        <div className="search-box">
          <span className="search-icon">⌕</span>
          <input
            type="text"
            placeholder="Kino qidirish..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Menyuni ochish yoki yopish"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}

export default Navbar;

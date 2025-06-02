import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
import './App.css';

function Counter({ label, value }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = value / 50;
    const interval = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);
    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="counter">
      <h3>{label}</h3>
      <p>{count}</p>
    </div>
  );
}

export default function App() {
  const [stats, setStats] = useState({ events: 25, artists: 12, countries: 8, team: 10 });
  const [artists, setArtists] = useState([
    {
      name: 'John Doe',
      type: 'Singer',
      instagram: 'https://instagram.com/johndoe',
      facebook: 'https://facebook.com/johndoe',
      youtube: 'https://youtube.com/johndoe',
    },
    {
      name: 'Jane Smith',
      type: 'Actor',
      instagram: 'https://instagram.com/janesmith',
      facebook: 'https://facebook.com/janesmith',
      youtube: 'https://youtube.com/janesmith',
    },
  ]);

  const singers = artists.filter(a => a.type === 'Singer');
  const actors = artists.filter(a => a.type === 'Actor');
  const others = artists.filter(a => a.type === 'Artist');

  return (
    <div className="App">
      <header className="header">
        <h1>Artist Managed</h1>
        <p>We are a PR & Marketing firm managing exclusive artists across the globe.</p>
      </header>

      <section className="about-us-section">
        <div className="about-text">
          <h2>MCA Worldwide</h2>
          <h3>Who We Are?</h3>
          <p>
            We help brands instrument ATL & BTL advertising that can help reach a wider audience in order to inform
            customers about the product, focus on the target group of consumers, direct mail marketing drafted according to
            the needs of each brand, sponsorships, and tailor-made marketing strategies.
          </p>
        </div>
        <div className="about-images">
          <div className="image image-top-right">
            <img src="/about1.jpg" alt="About 1" />
          </div>
          <div className="image image-bottom-left">
            <img src="/about2.jpg" alt="About 2" />
          </div>
          <div className="image image-bottom-right">
            <img src="/about3.jpg" alt="About 3" />
          </div>
        </div>
      </section>

      <section className="stats"
        style={{
          backgroundImage: "url('/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          padding: "40px 20px",
        }}
      >
        <Counter label="Events" value={stats.events} />
        <Counter label="Artists" value={stats.artists} />
        <Counter label="Countries" value={stats.countries} />
        <Counter label="Team" value={stats.team} />
      </section>

      <section className="exclusive">
        <h2>#Exclusive Artists</h2>

        <div className="category">
          <h3>Singers</h3>
          <div className="artist-list">
            {singers.map(artist => (
              <div className="artist" key={artist.name}>
                <p>{artist.name}</p>
                <a href={artist.instagram} target="_blank" rel="noreferrer">Instagram</a> |{' '}
                <a href={artist.facebook} target="_blank" rel="noreferrer">Facebook</a>
              </div>
            ))}
          </div>
        </div>

        <div className="category">
          <h3>Actors</h3>
          <div className="artist-list">
            {actors.map(artist => (
              <div className="artist" key={artist.name}>
                <p>{artist.name}</p>
                <a href={artist.instagram} target="_blank" rel="noreferrer">Instagram</a> |{' '}
                <a href={artist.facebook} target="_blank" rel="noreferrer">Facebook</a>
              </div>
            ))}
          </div>
        </div>

        <div className="category">
          <h3>Artists</h3>
          <div className="artist-list">
            {others.map(artist => (
              <div className="artist" key={artist.name}>
                <p>{artist.name}</p>
                <a href={artist.instagram} target="_blank" rel="noreferrer">Instagram</a> |{' '}
                <a href={artist.facebook} target="_blank" rel="noreferrer">Facebook</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Artist Managed. All rights reserved.</p>
      </footer>
    </div>
  );
}

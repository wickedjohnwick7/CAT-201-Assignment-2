import React from "react";
import "../../App.css";

function NatureAdventure({ setPage }) {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Explore Penang's Nature & Adventure</h1>
          <p>
            Discover breathtaking landscapes and thrilling adventures in Penang's natural wonders:
          </p>
          <ul className="nav-list">
            <li>
              <img
                src="/images/penang_hill.jpg"
                alt="Penang Hill scenic view"
                className="nav-image"
              />
              <div>
                <p><strong>Penang Hill</strong></p>
                <p>
                  Enjoy panoramic views of the island from the top of Penang Hill, accessible by the iconic funicular train or hiking trails.
                </p>
              </div>
            </li>
            <li>
              <img
                src="/images/penang_national_park.jpg"
                alt="Penang National Park lush greenery"
                className="nav-image"
              />
              <div>
                <p><strong>Penang National Park</strong></p>
                <p>
                  Trek through lush jungles, discover pristine beaches, and visit the iconic lighthouse at Malaysia’s smallest national park.
                </p>
              </div>
            </li>
            <li>
              <img
                src="/images/escape_theme_park.jpg"
                alt="ESCAPE Theme Park outdoor adventure"
                className="nav-image"
              />
              <div>
                <p><strong>ESCAPE Theme Park</strong></p>
                <p>
                  Experience thrilling outdoor activities, from zip-lining and obstacle courses to water slides and rope challenges.
                </p>
              </div>
            </li>
            <li>
              <img
                src="/images/tropical_spice_garden.jpg"
                alt="Tropical Spice Garden lush greenery"
                className="nav-image"
              />
              <div>
                <p><strong>Tropical Spice Garden</strong></p>
                <p>
                  Wander through a beautifully landscaped garden featuring over 500 species of tropical flora and spices.
                </p>
              </div>
            </li>
          </ul>
          <button onClick={() => setPage("home")} className="nav-back">
            Back to Home
          </button>
        </div>
      </header>
    </div>
  );
}

export default NatureAdventure;

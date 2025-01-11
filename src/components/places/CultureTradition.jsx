import React from "react";
import "../../App.css";

function CultureTradition({ setPage }) {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Explore Penang's Culture & Traditions</h1>
          <p>
            Discover iconic sites where Penang's vibrant culture and rich traditions come to life.
          </p>
          <ul className="nav-list">
            <li>
              <img
                src="/images/pinang_peranakan_mansion.jpg"
                alt="Pinang Peranakan Mansion"
                className="nav-image"
              />
              <div>
                <p><strong>Pinang Peranakan Mansion</strong></p>
                <p>
                  Step into a beautifully restored Baba-Nyonya mansion filled with antiques that reflect the unique Peranakan culture of Penang.
                </p>
              </div>
            </li>
            <li>
              <img
                src="/images/khoo_kongsi.jpg"
                alt="Khoo Kongsi Clan House"
                className="nav-image"
              />
              <div>
                <p><strong>Khoo Kongsi Clan House</strong></p>
                <p>
                  One of the most impressive clan houses in Southeast Asia, Khoo Kongsi is known for its intricate carvings and historical significance.
                </p>
              </div>
            </li>
            <li>
              <img
                src="/images/little_india.jpg"
                alt="Little India, Penang"
                className="nav-image"
              />
              <div>
                <p><strong>Little India</strong></p>
                <p>
                  Immerse yourself in vibrant sights, sounds, and flavors at Little India, a bustling district filled with colorful shops and traditional eateries.
                </p>
              </div>
            </li>
            <li>
              <img
                src="/images/cheong_fatt_tze_mansion.jpg"
                alt="Cheong Fatt Tze Blue Mansion"
                className="nav-image"
              />
              <div>
                <p><strong>Cheong Fatt Tze (The Blue Mansion)</strong></p>
                <p>
                  A symbol of Penang’s architectural heritage, this iconic indigo-blue building offers guided tours that delve into its fascinating history.
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

export default CultureTradition;

import React from "react";
import "../../App.css";

function StreetFood({ setPage }) {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Penang's Best Street Food</h1>
          <p>Experience the vibrant flavors of Penang through its incredible street food:</p>

          <ul className="nav-list">
            <li>
              <img
                src="/images/lor_bak.jpg"
                alt="Lor Bak street food served with dipping sauces"
                className="nav-image"
              />
              <div>
                <p><strong>Lor Bak</strong></p>
                <p>Deep-fried marinated pork rolls wrapped in beancurd skin, served with dipping sauces.</p>
              </div>
            </li>
            <li>
              <img
                src="/images/satay.jpg"
                alt="Satay skewers at night market"
                className="nav-image"
              />
              <div>
                <p><strong>Satay</strong></p>
                <p>Grilled skewers of marinated meat served with peanut sauce, cucumber, and rice cakes.</p>
              </div>
            </li>
            <li>
              <img
                src="/images/chee_cheong_fun.jpg"
                alt="Chee Cheong Fun rice noodle rolls"
                className="nav-image"
              />
              <div>
                <p><strong>Chee Cheong Fun</strong></p>
                <p>Steamed rice noodle rolls topped with sweet sauce, shrimp paste, and sesame seeds.</p>
              </div>
            </li>
            <li>
              <img
                src="/images/apam_balek.jpg"
                alt="Apam Balek crispy peanut pancake"
                className="nav-image"
              />
              <div>
                <p><strong>Apam Balek</strong></p>
                <p>A crispy or soft pancake filled with crushed peanuts, sugar, and sometimes sweet corn.</p>
              </div>
            </li>
          </ul>

          <button onClick={() => setPage('home')} className="nav-back">
              Back to Home
          </button>
        </div>
      </header>
    </div>
  );
}

export default StreetFood;

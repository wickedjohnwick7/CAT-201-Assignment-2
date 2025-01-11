import React from "react";
import './transport.css';

function Bike({ setPage }) {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Bicycle Rentals and Bike Tours in Penang</h1>
          <p>Explore Penang at your own pace by renting a bicycle or joining guided bike tours:</p>

          <ul className="nav-list">
            <li>
              <img
                src="/images/bike_rental.jpg"
                alt="Bike Rental Station"
                className="nav-image"
              />
              <div>
                <p><strong>Bike Rental Stations</strong></p>
                <p>
                  Rent bicycles from popular spots around George Town and Batu Ferringhi. Options include hourly and daily rental packages.
                </p>
              </div>
            </li>
            <li>
              <img
                src="/images/bike_tours.jpg"
                alt="Guided Bike Tour"
                className="nav-image"
              />
              <div>
                <p><strong>Guided Bike Tours</strong></p>
                <p>
                  Join bike tours to discover heritage sites, street art, and local food stalls. Tours are available for different fitness levels.
                </p>
              </div>
            </li>
            <li>
              <img
                src="/images/bike_trails.jpg"
                alt="Bike Trails"
                className="nav-image"
              />
              <div>
                <p><strong>Popular Bike Trails</strong></p>
                <p>
                  Explore scenic routes like the George Town Heritage Trail and Penang National Park Trail for breathtaking views and cultural landmarks.
                </p>
              </div>
            </li>
            <li>
              <img
                src="/images/bike_safety.jpg"
                alt="Bike Safety Tips"
                className="nav-image"
              />
              <div>
                <p><strong>Bike Safety Tips</strong></p>
                <p>
                  Always wear helmets, follow traffic rules, and carry water. Avoid cycling during peak heat hours for a more comfortable ride.
                </p>
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

export default Bike;

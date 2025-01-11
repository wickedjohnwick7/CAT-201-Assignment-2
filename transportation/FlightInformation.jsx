import React from "react";
import './transport.css';

function FlightInformation({ setPage }) {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Flight Information for Penang</h1>
          <p>Find essential information about flights and airports for your trip to Penang:</p>

          <ul className="nav-list">
            <li>
              <img
                src="/images/penang_airport.jpg"
                alt="Penang International Airport"
                className="nav-image"
              />
              <div>
                <p><strong>Penang International Airport (PEN)</strong></p>
                <p>
                  Located in Bayan Lepas, Penang International Airport is the main gateway to the island. It serves both domestic and international flights.
                </p>
              </div>
            </li>
            <li>
              <img
                src="/images/airasia_flight.jpg"
                alt="AirAsia Flight"
                className="nav-image"
              />
              <div>
                <p><strong>Popular Airlines</strong></p>
                <p>
                  Major airlines operating at PEN include Malaysia Airlines, AirAsia, and Firefly, offering frequent flights to key destinations in Southeast Asia.
                </p>
              </div>
            </li>
            <li>
              <img
                src="/images/flight_schedules.jpg"
                alt="Flight Schedules"
                className="nav-image"
              />
              <div>
                <p><strong>Flight Schedules</strong></p>
                <p>
                  Regular direct flights to cities like Kuala Lumpur, Singapore, Bangkok, and more. Check airline websites for real-time schedule updates.
                </p>
              </div>
            </li>
            <li>
              <img
                src="/images/airport_services.jpg"
                alt="Airport Services"
                className="nav-image"
              />
              <div>
                <p><strong>Airport Services</strong></p>
                <p>
                  Facilities include duty-free shopping, dining options, car rentals, currency exchange, and comfortable lounges for a pleasant travel experience.
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

export default FlightInformation;

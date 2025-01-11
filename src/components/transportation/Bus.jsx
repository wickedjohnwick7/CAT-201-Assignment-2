import React from "react";
import './transport.css';

function Bus({ setPage }) {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Bus Transportation in Penang</h1>
          <p>Explore Penang conveniently using public buses. Below are essential details for tourists:</p>

          <ul className="nav-list">
            <li>
              <img
                src="/images/penang_bus_terminal.jpg"
                alt="Penang Bus Terminal"
                className="nav-image"
              />
              <div>
                <p><strong>Penang Sentral</strong></p>
                <p>
                  The main transportation hub connecting buses to destinations across the island and the mainland.
                </p>
              </div>
            </li>
            <li>
              <img
                src="/images/rapid_penang_bus.jpg"
                alt="Rapid Penang Bus"
                className="nav-image"
              />
              <div>
                <p><strong>Rapid Penang Buses</strong></p>
                <p>
                  The primary public bus service in Penang. It covers key tourist spots like George Town, Batu Ferringhi, and the Penang National Park.
                </p>
              </div>
            </li>
            <li>
              <img
                src="/images/bus_routes.jpg"
                alt="Bus Routes"
                className="nav-image"
              />
              <div>
                <p><strong>Popular Bus Routes</strong></p>
                <p>
                  Routes 101 and 102 are popular among tourists for access to beaches and the airport, respectively. Always check updated schedules.
                </p>
              </div>
            </li>
            <li>
              <img
                src="/images/bus_tips.jpg"
                alt="Bus Travel Tips"
                className="nav-image"
              />
              <div>
                <p><strong>Travel Tips</strong></p>
                <p>
                  Buses can be paid with exact change or via contactless cards. Consider downloading the MyRapid app for route planning and schedules.
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

export default Bus;

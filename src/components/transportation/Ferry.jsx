import React from "react";
import './transport.css';

function Ferry({ setPage }) {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Ferry Services in Penang</h1>
          <p>Experience scenic views while traveling between Penang Island and the mainland by ferry:</p>

          <ul className="nav-list">
            <li>
              <img
                src="/images/penang_ferry_terminal.jpg"
                alt="Penang Ferry Terminal"
                className="nav-image"
              />
              <div>
                <p><strong>Penang Ferry Terminal</strong></p>
                <p>
                  The terminal is located at Weld Quay in George Town, connecting Penang Island to Butterworth on the mainland.
                </p>
              </div>
            </li>
            <li>
              <img
                src="/images/ferry_service.jpg"
                alt="Ferry Service"
                className="nav-image"
              />
              <div>
                <p><strong>Modern Ferry Services</strong></p>
                <p>
                  The ferry service now uses modern passenger boats offering faster travel times and comfortable seating for tourists and locals.
                </p>
              </div>
            </li>
            <li>
              <img
                src="/images/ferry_schedule.jpg"
                alt="Ferry Schedule"
                className="nav-image"
              />
              <div>
                <p><strong>Ferry Schedules</strong></p>
                <p>
                  Ferries operate regularly between 6:30 AM and 11:30 PM. Check schedules online for the latest updates and public holiday timings.
                </p>
              </div>
            </li>
            <li>
              <img
                src="/images/travel_tips.jpg"
                alt="Ferry Travel Tips"
                className="nav-image"
              />
              <div>
                <p><strong>Travel Tips</strong></p>
                <p>
                  Tickets can be purchased at the terminal or online. Enjoy beautiful views of the coastline and iconic landmarks during the ride.
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

export default Ferry;

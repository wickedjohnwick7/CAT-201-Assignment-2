import React from "react";
import './transport.css';

function KTM({ setPage }) {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>KTM Train Services to Penang</h1>
          <p>Travel conveniently between Penang and major cities in Malaysia using KTM train services:</p>

          <ul className="nav-list">
            <li>
              <img
                src="/images/butterworth_train_station.jpg"
                alt="Butterworth Train Station"
                className="nav-image"
              />
              <div>
                <p><strong>Butterworth KTM Station</strong></p>
                <p>
                  The main KTM station serving Penang is located in Butterworth, just a short ferry ride from George Town. It connects to key destinations via ETS (Electric Train Service) and Komuter trains.
                </p>
              </div>
            </li>
            <li>
              <img
                src="/images/ets_train.jpg"
                alt="ETS Train"
                className="nav-image"
              />
              <div>
                <p><strong>ETS (Electric Train Service)</strong></p>
                <p>
                  High-speed trains connecting Penang to Kuala Lumpur, Ipoh, and other major cities. Enjoy comfortable seating, onboard dining, and free Wi-Fi on select routes.
                </p>
              </div>
            </li>
            <li>
              <img
                src="/images/ktm_schedule.jpg"
                alt="KTM Train Schedule"
                className="nav-image"
              />
              <div>
                <p><strong>Train Schedules</strong></p>
                <p>
                  Frequent departures for popular routes. Advance booking is recommended during peak travel periods. Check the KTM website or app for updated schedules.
                </p>
              </div>
            </li>
            <li>
              <img
                src="/images/travel_tips_train.jpg"
                alt="Travel Tips for Train"
                className="nav-image"
              />
              <div>
                <p><strong>Travel Tips</strong></p>
                <p>
                  Purchase tickets online or at the station. Arrive early to ensure a smooth boarding experience. Consider bringing light snacks for longer journeys.
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

export default KTM;

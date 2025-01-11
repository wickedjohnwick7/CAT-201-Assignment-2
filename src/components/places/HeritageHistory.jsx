import React from "react";
import "../../App.css";

function HeritageHistory({ setPage }) {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Discover Penang's Heritage & Historical Places</h1>
          <p>
            Penang boasts a rich history with beautifully preserved heritage sites. 
            Here are some must-visit locations:
          </p>
          <ul className="nav-list">
            <li>
              <img
                src="/images/george_town.jpg"
                alt="George Town UNESCO World Heritage Site"
                className="nav-image"
              />
              <div>
                <p><strong>George Town</strong></p>
                <p>
                  A UNESCO World Heritage Site, George Town offers colonial architecture, traditional shophouses, and a mix of cultural influences.
                </p>
              </div>
            </li>
            <li>
              <img
                src="/images/kek_lok_si.jpg"
                alt="Kek Lok Si Temple"
                className="nav-image"
              />
              <div>
                <p><strong>Kek Lok Si Temple</strong></p>
                <p>
                  One of Southeast Asia’s largest Buddhist temples, Kek Lok Si features intricate carvings, beautiful architecture, and peaceful gardens.
                </p>
              </div>
            </li>
            <li>
              <img
                src="/images/fort_cornwallis.jpg"
                alt="Fort Cornwallis"
                className="nav-image"
              />
              <div>
                <p><strong>Fort Cornwallis</strong></p>
                <p>
                  The largest standing fort in Malaysia, Fort Cornwallis played a key role in Penang’s colonial past and offers fascinating historical insights.
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

export default HeritageHistory;

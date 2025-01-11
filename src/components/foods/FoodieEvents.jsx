import React from "react";
import "../../App.css";

function FoodieEvents({ setPage }) {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Foodie Events in Penang</h1>
          <p>Join these exciting food festivals and culinary events to taste the best of Penang:</p>

          <ul className="nav-list">
            <li>
              <img
                src="/images/penang_food_festival.jpg"
                alt="Penang International Food Festival"
                className="nav-image"
              />
              <div>
                <p><strong>Penang International Food Festival (PIFF)</strong></p>
                <p>Celebrate Penang's culinary diversity with street food, cooking workshops, and food tours.</p>
              </div>
            </li>
            <li>
              <img
                src="/images/george_town_festival.jpg"
                alt="George Town Festival featuring food and cultural performances"
                className="nav-image"
              />
              <div>
                <p><strong>George Town Festival</strong></p>
                <p>A cultural extravaganza featuring art, music, and food pop-ups showcasing Penang's flavors.</p>
              </div>
            </li>
            <li>
              <img
                src="/images/street_food_carnival.jpg"
                alt="Street Food Carnival with food stalls and vibrant ambiance"
                className="nav-image"
              />
              <div>
                <p><strong>Penang Street Food Carnival</strong></p>
                <p>An annual event with a variety of local and international street food vendors.</p>
              </div>
            </li>
            <li>
              <img
                src="/images/durian_festival.jpg"
                alt="Durian Festival with various durian types"
                className="nav-image"
              />
              <div>
                <p><strong>Durian Festival</strong></p>
                <p>A must-visit for durian lovers, offering different varieties of the King of Fruits.</p>
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

export default FoodieEvents;

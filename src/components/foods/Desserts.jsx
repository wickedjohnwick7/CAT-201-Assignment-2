import React from "react";
import "../../App.css";

function Desserts({ setPage }) {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Delicious Desserts in Penang</h1>
          <p>Indulge in some of the best traditional and modern desserts Penang has to offer:</p>

          <ul className="nav-list">
            <li>
              <img
                src="/images/cendol.jpg"
                alt="Penang Cendol served with shaved ice and palm sugar"
                className="nav-image"
              />
              <div>
                <p><strong>Cendol</strong></p>
                <p>Shaved ice dessert with green rice flour jelly, palm sugar syrup, and coconut milk.</p>
              </div>
            </li>
            <li>
              <img
                src="/images/ais_kacang.jpg"
                alt="A colorful bowl of Ais Kacang"
                className="nav-image"
              />
              <div>
                <p><strong>Ais Kacang</strong></p>
                <p>A vibrant bowl of shaved ice topped with syrup, red beans, jelly, sweet corn, and ice cream.</p>
              </div>
            </li>
            <li>
              <img
                src="/images/dodol.jpg"
                alt="Sticky sweet Dodol dessert squares"
                className="nav-image"
              />
              <div>
                <p><strong>Dodol</strong></p>
                <p>A chewy toffee-like dessert made from coconut milk, palm sugar, and rice flour.</p>
              </div>
            </li>
            <li>
              <img
                src="/images/pulut_tai_tai.jpg"
                alt="Pulut Tai Tai with vibrant blue glutinous rice"
                className="nav-image"
              />
              <div>
                <p><strong>Pulut Tai Tai</strong></p>
                <p>Steamed glutinous rice colored with butterfly pea flower, served with kaya (coconut jam).</p>
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

export default Desserts;

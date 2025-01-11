import React from "react";
import "../../App.css";

function MustTryDishes({ setPage }) {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Must-Try Dishes in Penang</h1>
          <p>Penang is renowned for its unique and flavorful dishes. Here are some you must try:</p>

          <ul className="nav-list">
            <li>
              <img
                src="/images/assam_laksa.jpg"
                alt="Penang Assam Laksa"
                className="nav-image"
              />
              <div>
                <p><strong>Penang Assam Laksa</strong></p>
                <p>A tangy and spicy fish-based noodle soup made with tamarind, topped with shredded mackerel, cucumber, and mint.</p>
              </div>
            </li>
            <li>
              <img
                src="/images/char_kway_teow.jpg"
                alt="Char Kway Teow"
                className="nav-image"
              />
              <div>
                <p><strong>Char Kway Teow</strong></p>
                <p>Stir-fried flat rice noodles with prawns, egg, bean sprouts, and Chinese sausage in a smoky soy sauce.</p>
              </div>
            </li>
            <li>
              <img
                src="/images/nasi_kandar.jpg"
                alt="Nasi Kandar"
                className="nav-image"
              />
              <div>
                <p><strong>Nasi Kandar</strong></p>
                <p>Steamed rice served with a variety of curries, meats, and vegetables for a rich and flavorful meal.</p>
              </div>
            </li>
            <li>
              <img
                src="/images/hokkien_mee.jpg"
                alt="Penang Hokkien Mee"
                className="nav-image"
              />
              <div>
                <p><strong>Penang Hokkien Mee</strong></p>
                <p>A delicious noodle soup featuring a spicy prawn broth, prawns, egg, and pork slices.</p>
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

export default MustTryDishes;

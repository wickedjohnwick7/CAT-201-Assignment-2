import React from 'react';
import '../App.css'; // Import global styles

function Food({ setPage }) {
    return (
        <div className="App">
            <header className="App-header">
                <div className="container">
                    <h1>Explore Penang's Food</h1>
                    <p>
                        Penang is renowned for its vibrant and diverse culinary scene. Some must-try dishes include:
                    </p>
                    <ul className="nav-list">
                        <li>
                            <img
                                src="/images/char_kway_teow.jpg"
                                alt="Char Kway Teow, stir-fried rice noodles with prawns and sausage"
                                className="nav-image"
                            />
                            <p>Char Kway Teow</p>
                        </li>
                        <li>
                            <img
                                src="/images/penang_laksa.jpg"
                                alt="Penang Laksa, a tangy fish-based noodle soup"
                                className="nav-image"
                            />
                            <p>Penang Laksa</p>
                        </li>
                        <li>
                            <img
                                src="/images/cendol.jpg"
                                alt="Cendol, a traditional dessert with shaved ice and coconut milk"
                                className="nav-image"
                            />
                            <p>Cendol</p>
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

export default Food;

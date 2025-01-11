import React from 'react';
import '../App.css'; // Import global styles

function Facilities({ setPage }) {
    return (
        <div className="App">
            <header className="App-header">
                <div className="container">
                    <h1>Facilities in Penang</h1>
                    <p>
                        Penang offers excellent facilities for tourists, including world-class hotels and convenient transportation.
                    </p>
                    <h2>Hotels</h2>
                    <ul className="nav-list">
                        <li>
                            <img
                                src="/images/prestige_hotel.jpg"
                                alt="The Prestige Hotel, a luxury hotel in Penang"
                                className="nav-image"
                            />
                            <p>The Prestige Hotel</p>
                        </li>
                        <li>
                            <img
                                src="/images/e_and_o.jpg"
                                alt="Eastern & Oriental Hotel, a historic hotel in George Town"
                                className="nav-image"
                            />
                            <p>Eastern & Oriental Hotel</p>
                        </li>
                    </ul>
                    <h2>Transportation</h2>
                    <ul className="nav-list">
                        <li>
                            <img
                                src="/images/rapid_penang.jpg"
                                alt="Rapid Penang Bus, a public transportation service"
                                className="nav-image"
                            />
                            <p>Rapid Penang Bus</p>
                        </li>
                        <li>
                            <img
                                src="/images/ferry.jpg"
                                alt="Penang Ferry connecting Butterworth and George Town"
                                className="nav-image"
                            />
                            <p>Penang Ferry</p>
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

export default Facilities;

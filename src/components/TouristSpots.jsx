import React from 'react';
import '../App.css'; // Import global styles

function TouristSpots({ setPage }) {
    return (
        <div className="App">
            <header className="App-header">
                <div className="container">
                    <h1>Explore Penang's Tourist Spots</h1>
                    <p>
                        Penang is home to numerous breathtaking tourist spots. Here are some must-visit places:
                    </p>
                    <ul className="nav-list">
                        <li>
                            <img
                                src="/images/penang_hill.jpg"
                                alt="A scenic view from Penang Hill, a popular highland destination"
                                className="nav-image"
                            />
                            <p>Penang Hill</p>
                        </li>
                        <li>
                            <img
                                src="/images/escape_theme_park.jpg"
                                alt="Adventure rides and activities at Escape Theme Park"
                                className="nav-image"
                            />
                            <p>Escape Theme Park</p>
                        </li>
                        <li>
                            <img
                                src="/images/penang_butterfly_farm.jpg"
                                alt="Colorful butterflies at Penang Butterfly Farm"
                                className="nav-image"
                            />
                            <p>Penang Butterfly Farm</p>
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

export default TouristSpots;

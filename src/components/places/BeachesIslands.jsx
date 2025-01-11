import React from 'react';
import "../../App.css";

function BeachesIslands({ setPage }) {
    return (
        <div className="App">
            <header className="App-header">
                <div className="container">
                    <h1>Explore Penang's Beaches and Islands</h1>
                    <p>
                        Penang offers a variety of stunning beaches and islands. Here are some must-visit spots:
                    </p>
                    <ul className="nav-list">
                        <li>
                            <img
                                src="/images/batu_ferringhi.jpg"
                                alt="Batu Ferringhi Beach with its pristine sand and clear waters"
                                className="nav-image"
                            />
                            <div>
                                <p><strong>Batu Ferringhi Beach</strong></p>
                                <p>Known for its pristine sand and crystal-clear waters, Batu Ferringhi offers various water sports activities and beachfront resorts.</p>
                            </div>
                        </li>
                        <li>
                            <img
                                src="/images/tanjung_bungah.jpg"
                                alt="Serene views at Tanjung Bungah Beach"
                                className="nav-image"
                            />
                            <div>
                                <p><strong>Tanjung Bungah Beach</strong></p>
                                <p>A quieter beach ideal for families, Tanjung Bungah provides stunning views and calm waters for a relaxing day out.</p>
                            </div>
                        </li>
                        <li>
                            <img
                                src="/images/monkey_beach.jpg"
                                alt="Monkey Beach with lush greenery and wildlife"
                                className="nav-image"
                            />
                            <div>
                                <p><strong>Monkey Beach</strong></p>
                                <p>Accessible via a jungle trek or boat ride, Monkey Beach is surrounded by lush greenery and home to friendly monkeys.</p>
                            </div>
                        </li>
                        <li>
                            <img
                                src="/images/jerejak_island.webp"
                                alt="Jerejak Island surrounded by natural beauty"
                                className="nav-image"
                            />
                            <div>
                                <p><strong>Jerejak Island</strong></p>
                                <p>Once a leper colony, Jerejak Island is now a peaceful retreat with rich history and lush natural surroundings.</p>
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

export default BeachesIslands;

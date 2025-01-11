import React from 'react';
import './accommodation.css';

function Resort({ setPage }) {
    return (
        <div className="page-container resort">
            <header>
                <div className="page-content">
                    <h1 className="page-title">Best Resorts in Penang</h1>
                    <p className="page-description">
                        Escape to Penang’s top resorts, offering breathtaking views, exclusive services, and ultimate relaxation.
                    </p>
                    <ul className="nav-list">
                        <li>
                            <img
                                src="/images/shangri_la.jpg"
                                alt="Shangri-La Rasa Sayang Resort"
                                className="page-image"
                            />
                            <div>
                                <p><strong>Shangri-La Rasa Sayang</strong></p>
                                <p>Located on Batu Ferringhi Beach, this resort features lush gardens, fine dining, and premium spa services.</p>
                            </div>
                        </li>
                        <li>
                            <img
                                src="/images/golden_sands.jpg"
                                alt="Golden Sands Resort by Shangri-La"
                                className="page-image"
                            />
                            <div>
                                <p><strong>Golden Sands Resort</strong></p>
                                <p>Perfect for families, this resort offers fun-filled activities, beachfront access, and cozy accommodations.</p>
                            </div>
                        </li>
                        <li>
                            <img
                                src="/images/lexis_suites.jpg"
                                alt="Lexis Suites Penang"
                                className="page-image"
                            />
                            <div>
                                <p><strong>Lexis Suites</strong></p>
                                <p>Relax in luxurious suites with private pools, situated in a serene location with ocean views.</p>
                            </div>
                        </li>
                    </ul>
                    <button onClick={() => setPage('home')} className="back-button">
                        Back to Home
                    </button>
                </div>
            </header>
        </div>
    );
}

export default Resort;

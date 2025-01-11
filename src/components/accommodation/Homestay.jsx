import React from 'react';
import './accommodation.css';

function Homestay({ setPage }) {
    return (
        <div className="page-container homestay">
            <header>
                <div className="page-content">
                    <h1 className="page-title">Unique Homestays in Penang</h1>
                    <p className="page-description">
                        Experience Penang like a local by staying in cozy and welcoming homestays across the island.
                    </p>
                    <ul className="nav-list">
                        <li>
                            <img
                                src="/images/george_town_homestay.jpg"
                                alt="George Town Heritage Homestay"
                                className="page-image"
                            />
                            <div>
                                <p><strong>George Town Homestay</strong></p>
                                <p>Stay in the heart of George Town and immerse yourself in the rich history and culture of the area.</p>
                            </div>
                        </li>
                        <li>
                            <img
                                src="/images/balik_pulau_homestay.jpg"
                                alt="Balik Pulau Countryside Homestay"
                                className="page-image"
                            />
                            <div>
                                <p><strong>Balik Pulau Homestay</strong></p>
                                <p>Experience tranquil countryside living with picturesque views and authentic local experiences.</p>
                            </div>
                        </li>
                        <li>
                            <img
                                src="/images/tanjung_tokong_homestay.jpg"
                                alt="Tanjung Tokong Homestay by the beach"
                                className="page-image"
                            />
                            <div>
                                <p><strong>Tanjung Tokong Homestay</strong></p>
                                <p>Located near the beach, this homestay offers convenience, comfort, and a warm hospitality experience.</p>
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

export default Homestay;

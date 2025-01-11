import React from 'react';
import './accommodation.css';

function Hotel({ setPage }) {
    return (
        <div className="page-container hotel">
            <header>
                <div className="page-content">
                    <h1 className="page-title">Luxury Hotels in Penang</h1>
                    <p className="page-description">
                        Discover the best luxury hotels in Penang, offering comfort, convenience, and world-class facilities.
                    </p>
                    <ul className="nav-list">
                        <li>
                            <img
                                src="/images/eastern_and_oriental.jpg"
                                alt="Eastern and Oriental Hotel"
                                className="page-image"
                            />
                            <div>
                                <p><strong>Eastern & Oriental Hotel</strong></p>
                                <p>Renowned for its colonial charm and waterfront views, this historic hotel promises a luxurious experience.</p>
                            </div>
                        </li>
                        <li>
                            <img
                                src="/images/g_hotel.jpg"
                                alt="G Hotel Gurney"
                                className="page-image"
                            />
                            <div>
                                <p><strong>G Hotel Gurney</strong></p>
                                <p>Located near Gurney Drive, this stylish hotel offers modern amenities and easy access to shopping and dining.</p>
                            </div>
                        </li>
                        <li>
                            <img
                                src="/images/le_meridien.jpg"
                                alt="Le Meridien Penang"
                                className="page-image"
                            />
                            <div>
                                <p><strong>Le Méridien</strong></p>
                                <p>Enjoy unparalleled comfort and a contemporary design at Le Méridien, perfect for both business and leisure.</p>
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

export default Hotel;

import React from 'react';
import './PenangPage.css'; // Import CSS for styling

const PenangPage = () => {
    return (
        <section id="penangPage" className="penang-page-section">
            {/* Header Image */}
            <div className="penang-page-header">
                <img 
                    src="/images/penang-bridge.jpg" 
                    className="penang-header-image" 
                    alt="Penang Bridge"
                />
            </div>

            {/* Title */}
            <div className="penang-page-title-container">
                <h1 className="penang-page-title">Penang Recommends</h1>
            </div>

            {/* Video */}
            <div className="penang-video-container">
                <video width="100%" height="auto" controls>
                    <source src="/videos/penang-tour.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Description */}
            <div className="penang-description-container">
                <p className="penang-description">
                    Penang is a beautiful destination with rich culture, stunning beaches, and delicious food. 
                    Whether you are looking to explore historical landmarks, indulge in local delicacies, 
                    or simply relax by the beach, Penang has something for everyone. 
                    Discover the best places to visit and experience the charm of this amazing destination.
                </p>
            </div>

            {/* Additional Image */}
            <div className="penang-page-image-container">
                <img 
                    src="/images/penang-map.png"  // Replace with another image
                    className="penang-page-image" 
                    alt="Penang Map"
                />
            </div>
        </section>
    );
};

export default PenangPage;

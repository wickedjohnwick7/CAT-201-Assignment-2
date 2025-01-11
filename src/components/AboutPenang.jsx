import React from 'react';
import './AboutPenang.css'; // Import CSS for styling

const AboutPenang = ({onLearnMore}) => {
    return (
        <section id="aboutPenang" className="about-penang-section">
            <div className="about-penang-box">
                {/* Title */}
                <h1 className="about-penang-title">About Penang</h1>

                {/* Content Section */}
                <div className="about-penang-content">
                    {/* Left Side: Image */}
                    <div className="about-penang-left">
                        <img
                            src="/images/about-penang.jpg"
                            alt="Beautiful Penang"
                            className="about-penang-image"
                        />
                    </div>

                    {/* Right Side: Description and Button */}
                    <div className="about-penang-right">
                        <p className="about-penang-description">
                            Penang, known as the Pearl of the Orient, is a vibrant state in Malaysia with a rich history, diverse culture, and incredible cuisine. Explore its beautiful heritage sites, pristine beaches, and bustling street food scene.
                        </p>
                        <button
                            className="about-penang-button"
                            onClick={onLearnMore}  > Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPenang;

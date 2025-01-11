import React from 'react';
import './Header.css'; // Import the CSS file with the styles

const Header = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            {/* Top half of the page with background image */}
            <div className="top-half-background">
                <div className="header-left">
                    <img
                        src="/images/penang-logo.png"
                        alt="Penang Logo"
                        className="logo"
                    />
                    <span className="website-name">MyPenang</span>
                </div>
            </div>

            {/* Header Section: Logo, Navigation, and Icons */}
            <header className="header">
                {/* Left Section: Logo */}
                <div className="header-left">
                    <img
                        src="/images/penang-logo.png"
                        alt="Penang Logo"
                        className="logo"
                    />
                    <span className="website-name">MyPenang</span>
                </div>

                {/* Center Section: Navigation */}
                <nav className="header-nav">
                    <ul className="nav-lists">
                        <li className="nav-items" onClick={() => scrollToSection('AboutPenang')}>About Penang</li>
                         <li className="nav-items" onClick={() => scrollToSection('Places')}>Attractions</li>
                         <li className="nav-items" onClick={() => scrollToSection('Food')}>Local Food</li>
                         <li className="nav-items" onClick={() => scrollToSection('Transportation')}>Transportation</li>
                         <li className="nav-items" onClick={() => scrollToSection('Accomodation')}>Accommodation</li>
                    </ul>
                </nav>

                {/* Right Section: Icons */}
                <div className="header-right">
                    <i className="fas fa-globe" title="Language"></i>
                    <i className="fas fa-heart" title="Favorites"></i>
                    <i className="fas fa-search" title="Search"></i>
                </div>
            </header>
        </div>
    );
};
export default Header;

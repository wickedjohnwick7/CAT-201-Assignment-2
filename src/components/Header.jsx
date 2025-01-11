import React from 'react';
import './Header.css'; // Import the CSS file with the background styling

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
                        src="/images/penang-logo.png" // Update logo for Penang
                        alt="Penang Logo"
                        className="logo"
                    />
                    <span className="website-name">MyPenang</span> {/* Added website name */}
                </div>
            </div>

            {/* Header Section: Logo, Navigation, and Icons */}
            <header className="header">
                {/* Left Section: Logo */}
                <div className="header-left">
                    <img
                        src="/images/penang-logo.png" // Update logo for Penang
                        alt="Penang Logo"
                        className="logo"
                    />
                    <span className="website-name">MyPenang</span> {/* Added website name */}
                </div>

                {/* Center Section: Navigation */}
                <nav className="header-nav">
                    <ul className="nav-list">
                        <li className="nav-item" onClick={() => scrollToSection('AboutPenang')}>
                            About Penang <span>▼</span>
                        </li>
                        <li className="nav-item" onClick={() => scrollToSection('Places')}>
                            Attractions <span>▼</span>
                        </li>
                        <li className="nav-item" onClick={() => scrollToSection('Food')}>
                            Local Food <span>▼</span>
                        </li>
                        <li className="nav-item" onClick={() => scrollToSection('Transportation')}>
                            Transportation <span>▼</span>
                        </li>
                        <li className="nav-item" onClick={() => scrollToSection('Accomodation')}>
                            Accomodation <span>▼</span>
                        </li>
                    </ul>
                </nav>

                {/* Right Section: Font Awesome Icons */}
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

import React, { useState } from "react";
import Header from './components/Header';
import './App.css';
import AboutPenang from './components/AboutPenang';
import PenangPage from "./components/PenangPage";
import NavigationRouter from './components/NavigationRouter'; // Import router component

function App() {
    const [showPenangPage, setShowPenangPage] = useState(false);
    const [currentPage, setCurrentPage] = useState("home"); // Default to 'home'

    const renderPage = () => {
        switch (currentPage) {
            case "home":
                return (
                    <>
                        <AboutPenang  onLearnMore={() => setCurrentPage('penangPage')}/>
                        {/* Image-based Navigation with Pages */}
                        <div className="image-navigation">
                            <img
                                src="/images/Beaches.jpg"
                                alt="Beaches and Islands"
                                className="nav-image"
                                onClick={() => setCurrentPage("beaches-islands")}
                            />
                            <img
                                src="/images/Heritage.jpg"
                                alt="Heritage and History"
                                className="nav-image"
                                onClick={() => setCurrentPage("heritage-history")}
                            />
                            <img
                                src="/images/Culture.jpg"
                                alt="Culture and Tradition"
                                className="nav-image"
                                onClick={() => setCurrentPage("culture-tradition")}
                            />
                            <img
                                src="/images/Nature.jpg"
                                alt="Nature and Adventure"
                                className="nav-image"
                                onClick={() => setCurrentPage("nature-adventure")}
                            />
                        </div>
                        
                        <h2>Food to Savor</h2>
                        <div className="places-navigation">
                            <img
                                src="/images/Desserts.jpg"
                                alt="Desserts"
                                className="nav-image"
                                onClick={() => setCurrentPage("desserts")}
                            />
        
                            <img
                                    src="/images/MustTry.jpg"
                                    alt="Must-try food"
                                    className="nav-image"
                                    onClick={() => setCurrentPage("must-try-dishes")}
                                />

                            <img
                                src="/images/Foodie.jpg"
                                alt="Foodie events"
                                className="nav-image"
                                onClick={() => setCurrentPage("foodie-events")}
                            />

                            <img
                                src="/images/StreetFood.jpg"
                                alt="Street food"
                                className="nav-image"
                                onClick={() => setCurrentPage("street-food")}
                            />
                        </div>

                        <h3>Transportation</h3>
                        <div className="places-navigation">
                            <img
                                src="/images/Ferry.jpg"
                                alt="Ferry"
                                className="nav-image"
                                onClick={() => setCurrentPage("ferry")}
                            />

                            <img
                                    src="/images/Flight.jpg"
                                    alt="Flight"
                                    className="nav-image"
                                    onClick={() => setCurrentPage("flight-information")}
                                />

                            <img
                                src="/images/Bus.jpg"
                                alt="Bus"
                                className="nav-image"
                                onClick={() => setCurrentPage("bus")}
                            />

                            <img
                                src="/images/KTM.jpg"
                                alt="Ktm"
                                className="nav-image"
                                onClick={() => setCurrentPage("ktm")}
                            />
                            <img
                                src="/images/Bike.jpg"
                                alt="Bike"
                                className="nav-image"
                                onClick={() => setCurrentPage("bike")}
                            />
                        </div>

                        <h4>Accommodationtion</h4>
                        <div className="places-navigation">
                            <img
                                src="/images/Hotel.jpg"
                                alt="Hotel"
                                className="nav-image"
                                onClick={() => setCurrentPage("hotel")}
                            />

                            <img
                                    src="/images/Homestay.jpg"
                                    alt="Homestay"
                                    className="nav-image"
                                    onClick={() => setCurrentPage("homestay")}
                                />

                            <img
                                src="/images/Resort.jpg"
                                alt="Resort"
                                className="nav-image"
                                onClick={() => setCurrentPage("resort")}
                            />                  
                        </div>

                        
                    </>
                );
            case "penangPage":
                return <PenangPage onBack={() => setCurrentPage("home")} />;
            default:
                return (
                    <NavigationRouter
                        currentPage={currentPage}
                        setPage={setCurrentPage}
                    />
                );
        }
    };

    return (
        <div className="App">
            {currentPage === "home" && <Header />}
            {renderPage()}
        </div>
    );
}

export default App;

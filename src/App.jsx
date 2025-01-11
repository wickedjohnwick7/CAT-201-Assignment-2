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
                        <section id="AboutPenang"></section>
                        <AboutPenang  onLearnMore={() => setCurrentPage('penangPage')}/>
                        {/* Image-based Navigation with Pages */}
                        <section id="Places"></section>
                        <h1>Must-visit Places in Penang</h1>
                        <div className="image-navigation">
                            <img
                                src="/images/Beaches.png"
                                alt="Beaches and Islands"
                                className="nav-image"
                                onClick={() => setCurrentPage("beaches-islands")}
                            />
                            <img
                                src="/images/Heritage.png"
                                alt="Heritage and History"
                                className="nav-image"
                                onClick={() => setCurrentPage("heritage-history")}
                            />
                            <img
                                src="/images/Culture.png"
                                alt="Culture and Tradition"
                                className="nav-image"
                                onClick={() => setCurrentPage("culture-tradition")}
                            />
                            <img
                                src="/images/Nature.png"
                                alt="Nature and Adventure"
                                className="nav-image"
                                onClick={() => setCurrentPage("nature-adventure")}
                            />
                        </div>
                        <section id="Food"></section>

                        <h2>Food to Savor</h2>
                        <div className="image-navigation">
                            <img
                                src="/images/Desserts.png"
                                alt="Desserts"
                                className="nav-image"
                                onClick={() => setCurrentPage("desserts")}
                            />

                            <img
                                src="/images/MustTry.png"
                                alt="Must-try food"
                                className="nav-image"
                                onClick={() => setCurrentPage("must-try-dishes")}
                            />

                            <img
                                src="/images/Foodie.png"
                                alt="Foodie events"
                                className="nav-image"
                                onClick={() => setCurrentPage("foodie-events")}
                            />

                            <img
                                src="/images/StreetFood.png"
                                alt="Street food"
                                className="nav-image"
                                onClick={() => setCurrentPage("street-food")}
                            />
                        </div>
                        <section id="Transportation"></section>

                        <h3>Transportation</h3>
                        <div className="image-navigation">
                            <img
                                src="/images/Ferry.png"
                                alt="Ferry"
                                className="nav-image"
                                onClick={() => setCurrentPage("ferry")}
                            />

                            <img
                                src="/images/Flight.png"
                                alt="Flight"
                                className="nav-image"
                                onClick={() => setCurrentPage("flight-information")}
                            />

                            <img
                                src="/images/Bus.png"
                                alt="Bus"
                                className="nav-image"
                                onClick={() => setCurrentPage("bus")}
                            />

                            <img
                                src="/images/KTM.png"
                                alt="Ktm"
                                className="nav-image"
                                onClick={() => setCurrentPage("ktm")}
                            />
                            <img
                                src="/images/Bike.png"
                                alt="Bike"
                                className="nav-image"
                                onClick={() => setCurrentPage("bike")}
                            />
                        </div>
                        <section id="Accomodation"></section>

                        <h4>Acommodation</h4>
                        <div className="image-navigation">
                            <img
                                src="/images/Hotel.png"
                                alt="Hotel"
                                className="nav-image"
                                onClick={() => setCurrentPage("hotel")}
                            />

                            <img
                                src="/images/Homestay.png"
                                alt="Homestay"
                                className="nav-image"
                                onClick={() => setCurrentPage("homestay")}
                            />

                            <img
                                src="/images/Resort.png"
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
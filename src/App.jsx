import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';
import AboutPenang from './components/AboutPenang';
import PenangPage from "./components/PenangPage";
import NavigationRouter from "./components/NavigationRouter";

function App() {
    const [showPenangPage, setShowPenangPage] = useState(false);
    return (
        <div className="App">
            <Header />
            {showPenangPage ? (
                <PenangPage onBack={() => setShowPenangPage(false)} />
            ) : (
                <AboutPenang onLearnMore={() => setShowPenangPage(true)} />
            )}
        </div>
    );
}

export default App;  
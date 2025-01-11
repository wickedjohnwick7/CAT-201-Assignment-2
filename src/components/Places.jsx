import React from 'react';
import './places.css';

// Place 1
const Place1 = () => (
    <div>
        <h1>Place 1</h1>
        <p>Details about Place 1...</p>
    </div>
);

// Place 2
const Place2 = () => (
    <div>
        <h1>Place 2</h1>
        <p>Details about Place 2...</p>
    </div>
);

// Place 3
const Place3 = () => (
    <div>
        <h1>Place 3</h1>
        <p>Details about Place 3...</p>
    </div>
);

// Place 4
const Place4 = () => (
    <div>
        <h1>Place 4</h1>
        <p>Details about Place 4...</p>
    </div>
);

// Main Places component displaying "Must Visit Places"
const Places = () => {
    return (
        <div>
            {/* Must Visit Places Section */}
            <div className="penang-places-container">
                <h2 className="must-visit-title">Must Visit Places in Penang</h2>
                <div className="penang-places-row">
                    {/* Place 1 */}
                    <div className="penang-place">
                        <img 
                            src="/images/place1.jpg"  // Replace with actual image path
                            alt="Place 1" 
                            className="penang-place-image"
                        />
                        <h3 className="penang-place-title">Place 1</h3>
                        <Place1 />
                    </div>
                    {/* Place 2 */}
                    <div className="penang-place">
                        <img 
                            src="/images/place2.jpg"  // Replace with actual image path
                            alt="Place 2" 
                            className="penang-place-image"
                        />
                        <h3 className="penang-place-title">Place 2</h3>
                        <Place2 />
                    </div>
                    {/* Place 3 */}
                    <div className="penang-place">
                        <img 
                            src="/images/place3.jpg"  // Replace with actual image path
                            alt="Place 3" 
                            className="penang-place-image"
                        />
                        <h3 className="penang-place-title">Place 3</h3>
                        <Place3 />
                    </div>
                    {/* Place 4 */}
                    <div className="penang-place">
                        <img 
                            src="/images/place4.jpg"  // Replace with actual image path
                            alt="Place 4" 
                            className="penang-place-image"
                        />
                        <h3 className="penang-place-title">Place 4</h3>
                        <Place4 />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Places;

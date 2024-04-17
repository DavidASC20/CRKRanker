import React, { useState, useEffect } from 'react';

const slides = [
    {
        img: "/caramelchouxcookie.jpg", // Adjust the path as needed
        text: "Caramel Choux Cookie!"
    },
    {
        img: "/streeturchincookie.jpg", // Adjust the path as needed
        text: "Street Urchin Cookie"
    }
];

function Pulls() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length); // Cycle through the slides
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(intervalId); // Clean up the interval on component unmount
    }, []);

    return (

        <div style={{background: 'rgba(0, 0, 0, 0.7)'}}>
            <h2>Pulls Page</h2>
            <div>
            <img 
                src={slides[currentIndex].img} 
                alt="Slideshow image" 
                style={{ width: '500px', height: 'auto' }}  // Set the width and maintain aspect ratio
            />
                <p>{slides[currentIndex].text}</p>
            </div>
        </div>
    );
}

export default Pulls;

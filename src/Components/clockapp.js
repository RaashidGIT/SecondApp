import React, { useState, useEffect } from 'react';

function Clockhook() {
    const [date, setDate] = useState(new Date());

    function newClock() {
        setDate(new Date());
    }

    useEffect(() => {
        // Set up the interval
        const intervalId = setInterval(newClock, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h1>{date.toLocaleTimeString()}</h1>
        </div>
    );
}

export default Clockhook;

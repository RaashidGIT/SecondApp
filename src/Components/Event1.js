import React from 'react'

function Event1() {
    function sayHello()
    {
        alert('Hello!');
    }
    return (
        <button onClick={sayHello}>Click Me!</button>
    );
}

export default Event1

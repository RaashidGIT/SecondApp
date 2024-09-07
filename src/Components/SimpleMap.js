import React from 'react'

function SampleMap() {
    const array1 = [1, 4, 9, 16];

//pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
    return(
        <div>
            <h1>{map1}</h1>
        </div>
    )
}

export default SampleMap

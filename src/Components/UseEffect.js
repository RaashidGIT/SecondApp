import React, { useEffect, useState } from 'react'

function ExampleComponent() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component has re-rendered" + count);
    }, [count]
)
  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={()=> setCount(count+1)}>Increment count</button>
    </div>
  )
}

export default ExampleComponent

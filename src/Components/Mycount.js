import { useState } from "react"

function Mycount() {
    const [count, setCount] = useState(0)

    function increment(){
        setCount(count+1)
    }
    function decrement(){
        setCount(count-1)
    }
    function reset(){
        setCount(count-count)
        // setCount(0)
    }
    return (
    <div>
        
        <h3>{count}</h3>
        <button onClick={increment}>  +  </button>{' '}
        <button onClick={decrement}>  -  </button>{' '}
        <button onClick={reset}>  Reset  </button>{' '}
    </div>
  )
}

export default Mycount
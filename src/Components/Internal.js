import React from 'react'

function Internal() {
    const mystyle={backgroundColor: "blue", color: "white"};

  return (
    <div>
        <p style = {mystyle}> 
            <b>Hello, color through Internal CSS</b>
        </p>
    </div>
  )
}

export default Internal
import React from 'react'

function Internal() {
    const mystyle = {backgroundColor: "blue", color: "white"};
    const lol = {backgroundColor: "green", color: "red"};
    const hiya = {backgroundColor: "black", color: "blue"};

  return (
    <div>
        <p style = {mystyle}> 
            <b>Hello, color through Internal CSS</b>
            <pre style = {hiya} >Lolololololol</pre>    
        </p>
        <h2 style = {lol} >Hiiiiiiiyyaaaaa!</h2>
    </div>
  )
}

export default Internal
import React from 'react'
import Child from './Child';

function Parent() {
    const flower = {
        name: "rose",
        color: "red",
        petals: 5
    };
  return (
    <div>
      <h1>Parent component</h1>
      <Child flower = {flower}/>
    </div>
  )
}

export default Parent

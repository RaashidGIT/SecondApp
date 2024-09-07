import React from 'react'

function Mymap() {
    const people = [
        { id: 1, name: "Sam", gender: "male", age: 30},
        { id: 2, name: "Jincy", gender: "female", age: 28},
        { id: 2, name: "Ajay", gender: "male", age: 13},
        { id: 2, name: "Fasi", gender: "female", age: 8}
    ]
  return (
    <div>
        {people.map(person => {
            return(
                <h4>
                    <h1><b>Name: {person.name}</b></h1>
                    <p>Id: {person.id}</p>

                    <p>Age: {person.age}</p>
                    <p>Gender: {person.gender}</p>
                </h4>
            )
        })}
    </div>
  )
}

export default Mymap
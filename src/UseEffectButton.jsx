import React, { useState, useEffect } from "react";

export function InputEffect() {
  const [number, setNumber] = useState(50);
    useEffect(()=>{
        console.log("Watching state");
    })
    //Just One argument to watch the component State in general
  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >Watch State</button>
    </>
  );
}

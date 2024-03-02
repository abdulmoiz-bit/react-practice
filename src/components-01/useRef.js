import React, { useState, useRef, useEffect } from 'react'

const Ref = () => {
  const [myData, setmyData] = useState("");
  //const [count, setCount] = useState(12);

  const count = useRef(30);
  console.log(count); 

  const inputElem = useRef("");

  useEffect(() =>{
    //setCount(count + 1);
    count.current = count.current + 1;
  })

  const changeStyle = () => {
    console.log(inputElem);
    console.log(inputElem.current);
    console.log(inputElem.current.value);
    console.log(inputElem.current.style);
    inputElem.current.style.backgroundColor = "red";
    inputElem.current.focus();
  }

  return (
    <div>
      <input type="text" ref={inputElem} value={myData}
        onChange={e => setmyData(e.target.value)} />
        <button onClick={changeStyle}> Click here</button>

        <p>{count.current}</p>
    </div>
  )
}

export default Ref;





























































/*
import { useEffect, useRef } from "react";

export default function Ref() {
  // create a ref
  const counter = useRef(0);

  // increase the counter by one
  const handleIncreaseCounter = () => {
    counter.current = counter.current + 1;
  };

  useEffect(() => {
    console.log("counter changed to: ", counter.current);
  }, [counter.current]);

  return (
    <div>
      <h1>Learn about useRef!</h1>
      <h2>Value: {counter.current}</h2>
      <button onClick={handleIncreaseCounter}>
Increase counter
    </button>
    </div>
  );
}

*/
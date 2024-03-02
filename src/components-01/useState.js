import React, {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0)
  
    function changeCount(amount) {
      setCount(prevCount => prevCount + amount)
    }
  
    function resetCount() {
      setCount(0)
    }
  
    return (
      <>
        <span>{count}</span>
        <button onClick={() => changeCount(1)}>+</button>
        <button onClick={() => changeCount(-1)}>-</button>
        <button onClick={() => resetCount()}>Reset</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </>
    )
  }

export default Counter;
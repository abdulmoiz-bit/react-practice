import React from 'react'

export const Child = (props) => {
  return (
    <div>
        <h1>Child</h1>
        <button onClick={() => props.changeWord("moiz")}>Change word</button>
    </div>
  )
}; 

export default Child;
import React, { useState } from 'react';
import { Child } from './Child';

export const Parent = () => {
    const [word , setWord] = useState("Rashid")
  return (
    <div>
        <h1>{word}</h1>
        <Child changeWord={word => setWord(word)}/>
    </div> 
  ) 
}

export default Parent;

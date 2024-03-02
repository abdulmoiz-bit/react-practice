import React from "react";

const Todos = ({ todoss, addTodoo }) => {
  //console.log("child render");
  return (
    <>
      <h2>My Todos Callback</h2>

      {todoss.map((todo, index) => {
        return(
        <p key={index}>{todo}</p>
        );
      })}

      <button onClick={addTodoo}>Add Todo</button>
    </> 
  );
};

export default Todos;
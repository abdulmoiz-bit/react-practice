import { useCallback, useState } from "react";
import Todos from "./todo";

const Callbackhook = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  /*
  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, `new Entry`]);
  }, [todos]);
*/
  const addTodo = () => {
    setTodos((prev) => [...prev, `new Entry`]);
  };

  return (
    <>
      <Todos todoss={todos} addTodoo={addTodo} />
      <hr></hr> 
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default Callbackhook;

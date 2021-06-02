import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};
function UseReducer() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>Count is : {count}</h1>
      <button onClick={dispatch({ type: "increment" })}>Increment</button>
      <button onClick={dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}

export default UseReducer;

import React, { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstcounter: state.firstcounter + action.value };
    case "decrement":
      return { ...state, firstcounter: state.firstcounter - action.value };
    case "increment-2":
      return { ...state, secondcounter: state.secondcounter + action.value };
    case "decrement-2":
      return { ...state, secondcounter: state.secondcounter - action.value };
    default:
      return state;
  }
};
function SecondCounter() {
  const [count, dispatch] = useReducer(reducer, {
    firstcounter: 0,
    secondcounter: 10,
  });
  return (
    <div>
      <p>Count:{count.firstcounter}</p>
      <p>Count:{count.secondcounter}</p>
      <button
        onClick={() => {
          dispatch({ type: "increment", value: 1 });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", value: 1 });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "increment-2", value: 5 });
        }}
      >
        Increment 5
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement-2", value: 5 });
        }}
      >
        Decrement-5
      </button>
    </div>
  );
}

export default SecondCounter;

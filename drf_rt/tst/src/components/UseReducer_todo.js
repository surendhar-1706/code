import React, { useReducer, useState } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "add-todo":
      return { todo: [...state.todo, { formstate: action.formstate }] };
    default:
      return state;
  }
};
function UseReducer_todo() {
  const [{ todo }, dispatch] = useReducer(reducer, { todo: [] });
  const [formstate, setformstate] = useState("");

  return (
    <div>
      <form>
        <input
          value={formstate}
          onChange={(e) => {
            console.log("wow from onchange");
            setformstate(e.target.value);
          }}
        ></input>
        <button
          onClick={(e) => {
            console.log("wow from handle submit");
            e.preventDefault();
            dispatch({ formstate, type: "add-todo" });
            setformstate("");
          }}
        >
          Submit
        </button>
        {todo.map((td) => {
          return <div key={td.formstate}>{td}</div>;
        })}
      </form>
      {formstate}
      <pre>{JSON.stringify(todo, null, 2)}</pre>
    </div>
  );
}

export default UseReducer_todo;

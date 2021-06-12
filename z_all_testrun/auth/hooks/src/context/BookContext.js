import React, { createContext, useReducer, useState } from "react";
import { BookReducer } from "../reducers/BookFile";

export const BookContext = createContext();
function BookContextProvider(props) {
  const [book, dispatch] = useReducer(BookReducer, []);

  return (
    <div>
      <p>wow</p>
      <BookContext.Provider value={{ book, dispatch }}>
        {props.children}
      </BookContext.Provider>
    </div>
  );
}

export default BookContextProvider;

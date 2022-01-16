import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

function BookDetail({ book }) {
  const { dispatch } = useContext(BookContext);
  return (
    <div>
      <div onClick={() => dispatch({ type: "remove_book", id: book.id })}>
        <p>Book Name:{book.title}</p>
        <p>Book Author:{book.author}</p>
      </div>
    </div>
  );
}

export default BookDetail;

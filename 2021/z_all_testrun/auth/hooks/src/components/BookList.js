import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookDetail from "./BookDetail";

function BookList() {
  const { book } = useContext(BookContext);
  return (
    <div>
      {book.map((d) => {
        return <BookDetail book={d} key={d.id} />;
      })}
    </div>
  );
}

export default BookList;

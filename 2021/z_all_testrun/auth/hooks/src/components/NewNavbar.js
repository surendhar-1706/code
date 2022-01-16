import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

function NewNavbar() {
  const data = useContext(BookContext);
  return (
    <div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <p>Current books{data.book.length}</p>
        </ul>
      </nav>
    </div>
  );
}

export default NewNavbar;

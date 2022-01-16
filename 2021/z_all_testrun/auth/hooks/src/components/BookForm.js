import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

function BookForm() {
  const { dispatch } = useContext(BookContext);
  const [detail, setdetail] = useState({ title: "", author: "" });
  const handleChange = (e) => {
    return setdetail({
      ...detail,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    console.log(detail);
    e.preventDefault();
    dispatch({
      type: "add_book",
      book: { title: detail.title, author: detail.author },
    });
    setdetail({
      title: "",  
      author: "",
    });
  };
  return (
    <div>
      <form>
        <p>title</p>
        <input name="title" onChange={handleChange} value={detail.title} />
        <p>author</p>
        <input name="author" onChange={handleChange} value={detail.author} />
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default BookForm;

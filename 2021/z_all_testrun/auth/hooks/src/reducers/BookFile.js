import { v4 as uuid } from "uuid";
export const BookReducer = (state, action) => {
  switch (action.type) {
    case "add_book":
      return [
        ...state,
        { title: action.book.title, author: action.book.author, id: uuid() },
      ];
    case "remove_book":
      return state.filter((b) => b.id !== action.id);
    default:
      return state;
  }
};

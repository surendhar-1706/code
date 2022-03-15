import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

test("rendering of input element", () => {
  render(<MockTodo />);
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });
  fireEvent.change(inputElement, { target: { value: "walk tommy" } });
  fireEvent.click(buttonElement);
  const divElement = screen.getByText(/walk tommy/i);
  //   console.log(divElement.children);
  expect(divElement).toBeInTheDocument();
});

test("rendering of multiple list values after clicking add button", () => {
  render(<MockTodo />);
  //   const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  //   const buttonElement = screen.getByRole("button", { name: /Add/i });
  //   fireEvent.change(inputElement, { target: { value: "walk tommy" } });
  //   fireEvent.click(buttonElement);
  //   fireEvent.change(inputElement, { target: { value: "water plants" } });
  //   fireEvent.click(buttonElement);

  addTask(["walk tommy", "water plants", "wash my hands"]);
  const divElements = screen.getAllByTestId("task-container");
  //   console.log(divElement.children);
  expect(divElements.length).toBe(3);
});

test("during initial render tasks should not be striked", () => {
  render(<MockTodo />);
  addTask(["walk tommy"]);
  const divElements = screen.getByText(/walk tommy/i);
  //   console.log(divElement.children);
  expect(divElements).not.toHaveClass("todo-item-active");
});

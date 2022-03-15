import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mocksettodo = jest.fn();

describe("testing add input componet", () => {
  test("rendering of input element", () => {
    render(<AddInput todos={[]} setTodos={mocksettodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);

    //   expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, { target: { value: "walk tommy" } });
    expect(inputElement.value).toBe("walk tommy");
  });
  test("when click submit input field goes to empty again", () => {
    render(<AddInput todos={[]} setTodos={mocksettodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: "walk tommy" } });
    //   expect(inputElement.value).toBe("walk tommy");
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });
});

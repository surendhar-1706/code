import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe("just todofooter tesing", () => {
  it("should test for assertions", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={0} />);
    const paraelement = screen.getByText(/0 tasks left/i);
    expect(paraelement).toBeInTheDocument();
  });

  test("when task is singular render just task ", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paraelement = screen.getByText(/1 task left/i);
    expect(paraelement).toBeVisible();
  });
});

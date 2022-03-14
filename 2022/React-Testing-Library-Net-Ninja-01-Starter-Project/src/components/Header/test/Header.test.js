import { render, screen } from "@testing-library/react";
import Header from "../Header";

it("should be same as props", () => {
  render(<Header title="my header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

it("should be same as props", () => {
  render(<Header title="my header" />);
  const headingElement = screen.getByRole("heading", { name: "my header" });
  expect(headingElement).toBeInTheDocument();
});

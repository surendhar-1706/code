import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowerList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

test("rendering of input element", async () => {
  render(<MockFollowerList />);
  const followerElement = await screen.findByTestId("follower-item-0");
  expect(followerElement).toBeInTheDocument();
});

it("should render multiple follower items", async () => {
  render(<MockFollowerList />);
  const followerElement = await screen.findAllByTestId(/follower-item/);
  expect(followerElement.length).toBe(5);
});

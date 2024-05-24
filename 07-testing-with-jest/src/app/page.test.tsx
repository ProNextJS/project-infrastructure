import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HomePage from "./page";

describe("Basic page test", () => {
  it("should render the page", () => {
    render(<HomePage />);
    expect(screen.getByText("Counter Test")).toBeDefined();
  });
});

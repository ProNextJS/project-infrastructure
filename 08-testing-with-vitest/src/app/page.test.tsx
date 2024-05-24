import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "./page";

test("Basic page test", () => {
  render(<HomePage />);
  expect(screen.getByText("Counter Test")).toBeDefined();
});

import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "./Counter";

test("tests a counter", async () => {
  render(<Counter />);

  await userEvent.click(screen.getByText("Increment"));

  expect(screen.getByTestId("count")).toHaveTextContent("Count: 2");
});

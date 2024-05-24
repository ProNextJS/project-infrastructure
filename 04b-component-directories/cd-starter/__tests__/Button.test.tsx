import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "../src/app/Button";

test("Basic page test", () => {
  render(<Button label="Foo" />);
  expect(screen.getByText("Foo")).toBeDefined();
});

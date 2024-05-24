import { render, screen } from "@testing-library/react";

import Page from "./page";

test("RSC Page", async () => {
  render(await Page());

  expect(await screen.findByText("bulbasaur")).toBeDefined();
});

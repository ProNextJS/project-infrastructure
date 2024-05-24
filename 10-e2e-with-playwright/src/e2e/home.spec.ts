import { test, expect } from "@playwright/test";

test("simple home page test", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("bulbasaur")).toBeVisible();
});

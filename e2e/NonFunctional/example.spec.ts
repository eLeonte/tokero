import { test, expect } from "@playwright/test";

test("Validate title", async ({ page }) => {
  await page.goto("https://tokero.dev/en/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(
    /Cryptocurrencies Exchange Platform | Crypto Trends & Market Insights | TOKERO/
  );
});

test("Create account", async ({ page }) => {
  await page.goto("https://tokero.dev/en/");
  await page.getByRole("button", { name: "Accept all cookies" }).click();

  // Click the get started link.
  await page
    .locator("header")
    .getByRole("link", { name: "Create Account" })
    .click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Create a new account" })
  ).toBeVisible();
});

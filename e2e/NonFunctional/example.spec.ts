import { test, expect } from "@playwright/test";
import { visitTokeroEng, validatePageTitle } from "../../support/helpers";

test("Validate title", async ({ page }) => {
  await visitTokeroEng(page);
  await validatePageTitle(
    page,
    "Cryptocurrencies Exchange Platform | Crypto Trends & Market Insights | TOKERO"
  );
});

test("Create account", async ({ page }) => {
  visitTokeroEng(page);

  // Click the Create Account link.
  await page
    .locator("header")
    .getByRole("link", { name: "Create Account" })
    .click();

  // Expects page to have a heading with the name of Create a new account.
  await expect(
    page.getByRole("heading", { name: "Create a new account" })
  ).toBeVisible();
});

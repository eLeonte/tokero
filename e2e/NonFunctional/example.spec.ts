import { test, expect } from "@playwright/test";
import { visitTokeroEng, validatePageTitle } from "../../support/helpers";

test.describe("Examples test - used custom validate title function", () => {
  test.beforeEach(async ({ page }) => {
    await page.context().clearCookies();
    await visitTokeroEng(page);

    await page
      .locator("header")
      .getByRole("link", { name: "Exchange" })
      .click();
  });

  test("Validate title", async ({ page }) => {
    await validatePageTitle(
      page,
      "Cryptocurrencies Exchange Platform | Crypto Trends & Market Insights | TOKERO"
    );
  });

  test("Validate Create account details", async ({ page }) => {
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
});

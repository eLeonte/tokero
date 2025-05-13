import { test, expect } from "@playwright/test";
import { visitTokeroEng } from "../../support/helpers";

test.describe("Exchange - change parity", () => {
  test("Validate EUR, RON, USD and USDC currencies", async ({ page }) => {
    const EUR = page.locator(".nav-item.baseCoins_tabItems__NHObL").nth(0);
    const RON = page.locator(".nav-item.baseCoins_tabItems__NHObL").nth(1);
    const USD = page.locator(".nav-item.baseCoins_tabItems__NHObL").nth(2);
    const USDC = page.locator(".nav-item.baseCoins_tabItems__NHObL").nth(3);

    await visitTokeroEng(page);

    await page
      .locator("header")
      .getByRole("link", { name: "Exchange" })
      .click();

    await page.locator("header").getByTitle("Exchange").isVisible();

    await expect(EUR).toBeVisible();
    await expect(EUR).toHaveText("EUR");
    await expect(EUR).toBeEnabled();

    await expect(RON).toBeVisible();
    await expect(RON).toHaveText("RON");
    await expect(RON).toBeEnabled();

    await expect(USD).toBeVisible();
    await expect(USD).toHaveText("USD");
    await expect(USD).toBeEnabled();

    await expect(USDC).toBeVisible();
    await expect(USDC).toHaveText("USDC");
    await expect(USDC).toBeEnabled();

    //Assertion of the child class that gets updated when the currency is selected
    await expect(EUR.locator(".nav-link")).toContainClass("active");
    await expect(RON.locator(".nav-link")).not.toContainClass("active");
    await expect(USD.locator(".nav-link")).not.toContainClass("active");
    await expect(USDC.locator(".nav-link")).not.toContainClass("active");

    await RON.click();
    await expect(EUR.locator(".nav-link")).not.toContainClass("active");
    await expect(RON.locator(".nav-link")).toContainClass("active");
    await expect(USD.locator(".nav-link")).not.toContainClass("active");
    await expect(USDC.locator(".nav-link")).not.toContainClass("active");

    await USD.click();
    await expect(EUR.locator(".nav-link")).not.toContainClass("active");
    await expect(RON.locator(".nav-link")).not.toContainClass("active");
    await expect(USD.locator(".nav-link")).toContainClass("active");
    await expect(USDC.locator(".nav-link")).not.toContainClass("active");

    await USDC.click();
    await expect(EUR.locator(".nav-link")).not.toContainClass("active");
    await expect(RON.locator(".nav-link")).not.toContainClass("active");
    await expect(USD.locator(".nav-link")).not.toContainClass("active");
    await expect(USDC.locator(".nav-link")).toContainClass("active");
  });
});

import { test, expect } from "@playwright/test";
import { visitTokeroEng } from "../../support/helpers";

test.describe("Exchange Performance and Cross-browser", () => {
  test.beforeEach(async ({ page }) => {
    await page.context().clearCookies();
    await visitTokeroEng(page);

    await page
      .locator("header")
      .getByRole("link", { name: "Exchange" })
      .click();
  });

  test("Exchange page load performance", async ({ page }) => {
    const EUR = page.locator(".nav-item.baseCoins_tabItems__NHObL").nth(0);
    const RON = page.locator(".nav-item.baseCoins_tabItems__NHObL").nth(1);
    const USD = page.locator(".nav-item.baseCoins_tabItems__NHObL").nth(2);
    const USDC = page.locator(".nav-item.baseCoins_tabItems__NHObL").nth(3);

    const startTime = Date.now();

    await page.locator("header").getByTitle("Exchange").isVisible();

    const loadTime = Date.now() - startTime;

    expect(loadTime).toBeLessThan(5000); // 5 seconds max

    await expect(EUR).toBeVisible();
    await expect(RON).toBeVisible();
    await expect(USD).toBeVisible();
    await expect(USDC).toBeVisible();
  });

  test("Responsive design on different viewports", async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    await expect(
      page.getByRole("link", { name: "Register Register" })
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Contact Contact" })
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Exchange Exchange" })
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Corporate Corporate" })
    ).toBeVisible();

    // Test desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.reload();

    await expect(
      page.getByRole("link", { name: "Corporate", exact: true })
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Exchange", exact: true })
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Academy", exact: true })
    ).toBeVisible();
    await expect(
      page.getByLabel("Topbar menu").getByRole("link", { name: "Contact us" })
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Login", exact: true })
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Create account", exact: true })
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "en flag EN", exact: true })
    ).toBeVisible();
  });
});

import { test, expect } from "@playwright/test";
import { visitTokeroEng } from "../../support/helpers";

test.describe("Newsletter subscription", () => {
  test("Validate newsletter input", async ({ page }) => {
    await visitTokeroEng(page);

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    const emailInput = page.locator('input[type="email"]');

    if (await emailInput.isVisible()) {
      // Test invalid email
      await emailInput.fill("invalid-email");
      await page.getByRole("button", { name: "Subscribe" }).click();
      await expect(page.locator(".error-message")).toBeVisible();

      // Test valid email
      await emailInput.fill("test@example.com");
      await page.getByRole("button", { name: "Subscribe" }).click();
      await expect(page.locator(".success-message")).toBeVisible();
    }
  });
});

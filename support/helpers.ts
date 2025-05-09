import { expect } from "@playwright/test";

export async function visitTokeroEng(page) {
  await page.goto("https://tokero.dev/en/");
  await page.getByRole("button", { name: "Accept all cookies" }).click();
}

export async function visitTokeroRo(page) {
  await page.goto("https://tokero.dev/ro/");
}

export async function validatePageTitle(page, title) {
  await expect(page).toHaveTitle(title);
}

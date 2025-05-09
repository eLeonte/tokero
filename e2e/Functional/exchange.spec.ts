import { test, expect } from "@playwright/test";
import { visitTokeroEng } from "../../support/helpers";

test("Choose parity", async ({ page }) => {
  const EUR = page.locator(".nav-item.baseCoins_tabItems__NHObL").nth(0);
  const RON = page.locator(".nav-item.baseCoins_tabItems__NHObL").nth(1);
  const USD = page.locator(".nav-item.baseCoins_tabItems__NHObL").nth(2);
  const USDC = page.locator(".nav-item.baseCoins_tabItems__NHObL").nth(3);

  visitTokeroEng(page);

  await page.locator("header").getByRole("link", { name: "Exchange" }).click();
  await page.locator("header").getByTitle("Exchange").isVisible();

  expect(EUR).toBeVisible();
  expect(EUR).toHaveText("EUR");
  expect(EUR).toBeEnabled();

  expect(RON).toBeVisible();
  expect(RON).toHaveText("RON");
  expect(RON).toBeEnabled();

  expect(USD).toBeVisible();
  expect(USD).toHaveText("USD");
  expect(USD).toBeEnabled();

  expect(USDC).toBeVisible();
  expect(USDC).toHaveText("USDC");
  expect(USDC).toBeEnabled();

  //Assertion of the child class that gets updated when the currency is selected
  expect(EUR.locator(".nav-link")).toContainClass("active");
  expect(RON.locator(".nav-link")).not.toContainClass("active");
  expect(USD.locator(".nav-link")).not.toContainClass("active");
  expect(USDC.locator(".nav-link")).not.toContainClass("active");

  RON.click();
  await expect(EUR.locator(".nav-link")).not.toContainClass("active");
  expect(RON.locator(".nav-link")).toContainClass("active");
  expect(USD.locator(".nav-link")).not.toContainClass("active");
  expect(USDC.locator(".nav-link")).not.toContainClass("active");

  USD.click();
  await expect(EUR.locator(".nav-link")).not.toContainClass("active");
  expect(RON.locator(".nav-link")).not.toContainClass("active");
  expect(USD.locator(".nav-link")).toContainClass("active");
  expect(USDC.locator(".nav-link")).not.toContainClass("active");

  USDC.click();
  await expect(EUR.locator(".nav-link")).not.toContainClass("active");
  expect(RON.locator(".nav-link")).not.toContainClass("active");
  expect(USD.locator(".nav-link")).not.toContainClass("active");
  expect(USDC.locator(".nav-link")).toContainClass("active");
});

import { test, expect } from "@playwright/test";
import { visitTokeroEng, visitTokeroRo } from "../../support/helpers";

test("Policies list - validate each list can be accessed - English", async ({
  page,
}) => {
  const termsAndConditions = page.getByRole("link", {
    name: "Terms and Conditions",
  });
  const privacy = page.getByRole("link", { name: "Privacy" });
  const fees = page.locator("header").getByRole("link", { name: "Fees" });
  const cookies = page.getByRole("link", { name: "Cookies" });
  const kYC = page.getByRole("link", { name: "KYC" });
  const refferrals = page.getByRole("link", { name: "Referrals" });
  const requestAnsweringProcessingTimes = page.getByRole("link", {
    name: "Request answering/processing times",
  });
  const minimumsAndOptions = page.getByRole("link", {
    name: "Minimums And options",
  });
  const gDPR = page.getByRole("link", { name: "GDPR" });
  const countriesListForAMLRiskAssessment = page.getByRole("link", {
    name: "Countries list for AML risk assessment",
  });

  visitTokeroEng(page);

  await page.getByRole("link", { name: "Policies list" }).click();
  await page
    .locator("header")
    .getByTitle("TOKERO policies and rules")
    .isVisible();

  expect(termsAndConditions).toBeVisible();
  expect(termsAndConditions).toHaveText("Terms and conditions");
  expect(termsAndConditions).toBeEnabled();
  termsAndConditions.click();
  await expect(page.getByTitle("Terms of service")).toBeVisible();

  await page.goBack();

  await expect(privacy).toBeVisible();
  await expect(privacy).toHaveText("Privacy");
  expect(privacy).toBeEnabled();
  privacy.click();
  await expect(page.getByTitle("Privacy Policy")).toBeVisible();

  await page.goBack();

  await expect(fees).toBeVisible();
  await expect(fees).toHaveText("Fees");
  expect(fees).toBeEnabled();
  fees.click();
  await expect(page.getByTitle("Fees and timings")).toBeVisible();

  await page.goBack();

  await expect(cookies).toBeVisible();
  await expect(cookies).toHaveText("Cookies");
  expect(cookies).toBeEnabled();
  cookies.click();
  await expect(page.getByTitle("Cookies Policy"));

  await page.goBack();
});

test("Policies list - validate each list can be accessed - Romanian", async ({
  page,
}) => {
  visitTokeroRo(page);
  await page.getByRole("button", { name: "Accept all cookies" }).click();
});

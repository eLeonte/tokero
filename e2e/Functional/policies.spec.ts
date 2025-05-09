import { test, expect } from "@playwright/test";
import { visitTokeroEng, visitTokeroRo } from "../../support/helpers";

test.only("Policies list - validate each list can be accessed - English", async ({
  page,
}) => {
  const termsAndConditions = page.getByRole("link", {
    name: "Terms and Conditions",
  });
  const privacy = page.getByRole("link", { name: "Privacy" });
  const fees = page.getByRole("link", { name: "Fees" });
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
  await page.getByRole("button", { name: "Accept all cookies" }).click();

  await page.getByRole("link", { name: "Policies list" }).click();
  await page
    .locator("header")
    .getByTitle("TOKERO policies and rules")
    .isVisible();

  expect(termsAndConditions).toBeVisible();
  expect(termsAndConditions).toHaveText("Terms and Conditions");
  expect(termsAndConditions).toBeEnabled();
  termsAndConditions.click();
});

test("Policies list - validate each list can be accessed - Romanian", async ({
  page,
}) => {
  visitTokeroRo(page);
  await page.getByRole("button", { name: "Accept all cookies" }).click();
});

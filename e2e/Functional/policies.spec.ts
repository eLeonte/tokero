import { test, expect } from "@playwright/test";
import { visitTokeroEng } from "../../support/helpers";

test.setTimeout(60000);
test.beforeEach(async ({ page }) => {
  await page.context().clearCookies();
  await visitTokeroEng(page);

  await page.getByRole("link", { name: "Policies list" }).isVisible();
  await page.getByRole("link", { name: "Policies list" }).click();

  await expect(page).toHaveURL(/\/en\/policies\/$/);
  await expect(
    page.getByRole("heading", { name: "TOKERO policies and rules" })
  ).toBeVisible();
});

test("Terms and Conditions", async ({ page }) => {
  const termsAndConditions = page.getByRole("link", {
    name: "Terms and Conditions",
    exact: true,
  });

  await expect(termsAndConditions).toBeVisible();
  await expect(termsAndConditions).toHaveText("Terms and Conditions");
  await expect(termsAndConditions).toBeEnabled();
  await termsAndConditions.click();

  await expect(page).toHaveURL(
    "https://tokero.dev/en/policies/terms-of-service/"
  );
  await expect(page.locator("h1")).toHaveText("Terms of Service");
});

test("Privacy Policy", async ({ page }) => {
  const privacy = page.getByRole("link", { name: "Privacy" });

  await expect(privacy).toBeVisible();
  await expect(privacy).toHaveText("Privacy");
  await expect(privacy).toBeEnabled();
  await privacy.click();

  await expect(page).toHaveURL("https://tokero.dev/en/policies/privacy/");
  await expect(page.locator("h1")).toHaveText("Privacy Policy");
});

test("Fees and timings", async ({ page }) => {
  const fees = page.getByRole("link", { name: "Fees", exact: true });

  await expect(fees).toBeVisible();
  await expect(fees).toHaveText("Fees");
  await expect(fees).toBeEnabled();
  await fees.click();

  await expect(page).toHaveURL("https://tokero.dev/en/policies/fees/");
  await expect(page.locator("h1")).toContainText("Fees and timings");
});

test("Cookies Policy", async ({ page }) => {
  const cookies = page.getByRole("link", { name: "Cookies" });

  await expect(cookies).toBeVisible();
  await expect(cookies).toHaveText("Cookies");
  await expect(cookies).toBeEnabled();
  await cookies.click();

  await expect(page).toHaveURL("https://tokero.dev/en/policies/cookies/");
  await expect(page.locator("h1")).toHaveText("Cookies Policy");
});

test("KYC and AML policy", async ({ page }) => {
  const kYC = page.getByRole("link", { name: "KYC" });

  await expect(kYC).toBeVisible();
  await expect(kYC).toHaveText("KYC");
  await expect(kYC).toBeEnabled();
  await kYC.click();

  // await page.waitForTimeout(1000);
  await expect(page).toHaveURL("https://tokero.dev/en/policies/kyc/");
  await expect(page.locator("h1")).toContainText("KYC and AML policy");
});

test("TOKERO Affiliate Heroes Program", async ({ page }) => {
  const refferrals = page.getByRole("link", { name: "Referrals" });

  await expect(refferrals).toBeVisible();
  await expect(refferrals).toHaveText("Referrals");
  await expect(refferrals).toBeEnabled();
  await refferrals.click();

  await expect(page).toHaveURL(
    "https://tokero.dev/en/policies/referral-program/"
  );
  // await page.waitForTimeout(1000);
  await expect(page.locator("h1")).toContainText(
    "TOKERO Affiliate Heroes Program"
  );
  await expect(page.locator("blazor-referral-program_v5")).toContainText(
    "Log in and share your link"
  );
  await expect(page.locator("blazor-referral-program_v5")).toContainText(
    "Register for an account today"
  );
});

test("Request answering/processing times", async ({ page }) => {
  const requestAnsweringProcessingTimes = page.getByRole("link", {
    name: "Request answering/processing times",
  });

  await expect(requestAnsweringProcessingTimes).toBeVisible();
  await expect(requestAnsweringProcessingTimes).toHaveText(
    "Request answering/processing times"
  );
  await expect(requestAnsweringProcessingTimes).toBeEnabled();
  await requestAnsweringProcessingTimes.click();

  await expect(page).toHaveURL(
    "https://tokero.dev/en/policies/answering-times/"
  );
  await expect(page.locator("h1")).toContainText(
    "Request answering/processing times"
  );
});

test("Minimums and options", async ({ page }) => {
  const minimumsAndOptions = page.getByRole("link", {
    name: "Minimums And options",
  });

  await expect(page).toHaveURL(
    "https://tokero.dev/en/policies/minimums-and-options/"
  );
  await expect(minimumsAndOptions).toBeVisible();
  await expect(minimumsAndOptions).toHaveText("Minimums and options");
  await expect(minimumsAndOptions).toBeEnabled();
  await minimumsAndOptions.click();
  await expect(page.locator("h1")).toContainText("Minimums and options");

  await expect(page.locator("blazor-minimums-and-options_v5")).toContainText(
    "Please select the coin that you are interested to see details about."
  );
});

test("GDPR", async ({ page }) => {
  const gDPR = page.getByRole("link", { name: "GDPR" });

  await expect(page).toHaveURL("https://tokero.dev/en/policies/gdpr/");
  await expect(gDPR).toBeVisible();
  await expect(gDPR).toHaveText("GDPR");
  await expect(gDPR).toBeEnabled();
  await gDPR.click();
  await expect(page.locator("h1")).toContainText(
    "RIGHTS OF DATA SUBJECTS WITH REGARD TO THE PROCESSING OF PERSONAL DATA UNDER EU REGULATION 2016/679"
  );
});

test("Countries list for AML risk assessment", async ({ page }) => {
  const countriesListForAMLRiskAssessment = page.getByRole("link", {
    name: "Countries list for AML risk assessment",
  });

  await expect(page).toHaveURL("https://tokero.dev/en/policies/aml-countries/");
  await expect(countriesListForAMLRiskAssessment).toBeVisible();
  await expect(countriesListForAMLRiskAssessment).toHaveText(
    "Countries list for AML risk assessment"
  );
  await expect(countriesListForAMLRiskAssessment).toBeEnabled();
  await countriesListForAMLRiskAssessment.click();
  await expect(page.locator("h1")).toContainText("AML Country Status");
  await expect(page.locator("tbody")).toContainText("Afghanistan");
});

test("Validate API request url for Policies list", async ({ page }) => {
  visitTokeroEng(page);

  const [request] = await Promise.all([
    page.waitForRequest(
      (req) => req.method() === "GET" && req.url().includes("/policies")
    ),

    await page.getByRole("link", { name: "Policies list" }).click(),
  ]);

  expect(request.url()).toContain("policies");
});

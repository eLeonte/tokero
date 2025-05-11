import { test, expect } from "@playwright/test";
import { visitTokeroEng, visitTokeroRo } from "../../support/helpers";

test("Policies list - validate each list can be accessed", async ({ page }) => {
  const termsAndConditions = page.getByRole("link", {
    name: "Terms and Conditions",
    exact: true,
  });
  const privacy = page.getByRole("link", { name: "Privacy" });
  const fees = page.getByRole("link", { name: "Fees", exact: true });
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

  await expect(
    page.getByRole("heading", { name: "TOKERO policies and rules" })
  ).toBeVisible();

  await expect(termsAndConditions).toBeVisible();
  await expect(termsAndConditions).toHaveText("Terms and Conditions");
  await expect(termsAndConditions).toBeEnabled();
  await termsAndConditions.click();
  await expect(page.locator("h1")).toHaveText("Terms of Service");

  await page.goBack();

  await expect(privacy).toBeVisible();
  await expect(privacy).toHaveText("Privacy");
  await expect(privacy).toBeEnabled();
  await privacy.click();
  await expect(page.locator("h1")).toHaveText("Privacy Policy");

  await page.goto("https://tokero.dev/en/policies/");

  await expect(fees).toBeVisible();
  await expect(fees).toHaveText("Fees");
  await expect(fees).toBeEnabled();
  await fees.click();
  await expect(page.locator("h1")).toContainText("Fees and timings");

  await page.goBack();

  await expect(cookies).toBeVisible();
  await expect(cookies).toHaveText("Cookies");
  await expect(cookies).toBeEnabled();
  await cookies.click();
  await expect(page.locator("h1")).toHaveText("Cookies Policy");

  await page.goBack();

  await expect(kYC).toBeVisible();
  await expect(kYC).toHaveText("KYC");
  await expect(kYC).toBeEnabled();
  await kYC.click();
  await expect(
    page.getByRole("heading", { name: "KYC and AML policy" })
  ).toBeVisible();

  await page.goto("https://tokero.dev/en/policies/");

  await expect(refferrals).toBeVisible();
  await expect(refferrals).toHaveText("Referrals");
  await expect(refferrals).toBeEnabled();
  await refferrals.click();

  await page.waitForTimeout(2000);
  await expect(page.locator("h1")).toContainText(
    "TOKERO Affiliate Heroes Program"
  );
  await expect(page.locator("blazor-referral-program_v5")).toContainText(
    "Log in and share your link"
  );
  await expect(page.locator("blazor-referral-program_v5")).toContainText(
    "Register for an account today"
  );

  await page.goBack();

  await expect(requestAnsweringProcessingTimes).toBeVisible();
  await expect(requestAnsweringProcessingTimes).toHaveText(
    "Request answering/processing times"
  );
  await expect(requestAnsweringProcessingTimes).toBeEnabled();
  await requestAnsweringProcessingTimes.click();
  await expect(page.locator("h1")).toContainText(
    "Request answering/processing times"
  );

  await page.goBack();

  await expect(minimumsAndOptions).toBeVisible();
  await expect(minimumsAndOptions).toHaveText("Minimums and options");
  await expect(minimumsAndOptions).toBeEnabled();
  await minimumsAndOptions.click();
  await expect(page.locator("h1")).toContainText("Minimums and options");

  await expect(page.locator("blazor-minimums-and-options_v5")).toContainText(
    "Please select the coin that you are interested to see details about."
  );

  await page.goBack();

  await expect(gDPR).toBeVisible();
  await expect(gDPR).toHaveText("GDPR");
  await expect(gDPR).toBeEnabled();
  await gDPR.click();
  await expect(page.locator("h1")).toContainText(
    "RIGHTS OF DATA SUBJECTS WITH REGARD TO THE PROCESSING OF PERSONAL DATA UNDER EU REGULATION 2016/679"
  );

  await page.goBack();

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

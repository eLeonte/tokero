import { test, expect } from "@playwright/test";
import { visitTokeroEng } from "../../support/helpers";

test.describe("Validate Policy links", () => {
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
    const privacy = page
      .locator("blazor-policies_v5")
      .getByRole("link", { name: "Privacy" })
      .filter({ hasText: "Privacy" });

    await expect(privacy).toBeVisible();
    await expect(privacy).toHaveText("Privacy");
    await expect(privacy).toBeEnabled();
    await privacy.click();

    await expect(page).toHaveURL("https://tokero.dev/en/policies/privacy/");
    await expect(
      page
        .locator("blazor-policy-item_v5")
        .getByRole("heading", { name: "Privacy Policy" })
        .first()
    ).toBeVisible();
    await expect(page.locator("h1").first()).toHaveText("Privacy Policy");
  });

  test("Fees and timings", async ({ page }) => {
    const fees = page.getByRole("link", { name: "Fees", exact: true });

    await expect(fees).toBeVisible();
    await expect(fees).toHaveText("Fees");
    await expect(fees).toBeEnabled();
    await fees.click();

    await expect(page).toHaveURL("https://tokero.dev/en/policies/fees/");
    await expect(
      page.getByRole("heading", { name: "Fees and timings" })
    ).toBeVisible();
    await expect(page.locator("h1")).toContainText("Fees and timings");
  });

  test("Cookies Policy", async ({ page }) => {
    const cookies = page
      .locator("blazor-policies_v5")
      .getByRole("link", { name: "Cookies" });

    await expect(cookies).toBeVisible();
    await expect(cookies).toHaveText("Cookies");
    await expect(cookies).toBeEnabled();
    await cookies.click();

    await expect(page).toHaveURL("https://tokero.dev/en/policies/cookies/");
    await expect(
      page.getByRole("heading", { name: "Cookies Policy" })
    ).toBeVisible();
    await expect(page.locator("h1")).toHaveText("Cookies Policy");
  });

  test("KYC and AML policy", async ({ page }) => {
    const kYC = page.getByRole("link", { name: "KYC" }).first();

    await expect(kYC).toBeVisible();
    await expect(kYC).toHaveText("KYC");
    await expect(kYC).toBeEnabled();
    await kYC.click();

    await expect(page).toHaveURL("https://tokero.dev/en/policies/kyc/");
    await expect(
      page.getByRole("heading", { name: "KYC and AML policy" })
    ).toBeVisible();
    await expect(page.locator("h1")).toContainText("KYC and AML policy");
  });

  test("TOKERO Affiliate Heroes Program", async ({ page }) => {
    const refferrals = page.getByRole("link", { name: "Referrals" }).first();

    await expect(refferrals).toBeVisible();
    await expect(refferrals).toHaveText("Referrals");
    await expect(refferrals).toBeEnabled();
    await refferrals.click();

    await expect(page).toHaveURL("https://tokero.dev/en/referral-program/");
    await expect(
      page.getByRole("heading", { name: "TOKERO Affiliate Heroes Program" })
    ).toBeVisible();
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
    const requestAnsweringProcessingTimes = page
      .getByRole("link", {
        name: "Request answering/processing times",
      })
      .first();

    await expect(requestAnsweringProcessingTimes).toBeVisible();
    await expect(requestAnsweringProcessingTimes).toHaveText(
      "Request answering/processing times"
    );
    await expect(requestAnsweringProcessingTimes).toBeEnabled();
    await requestAnsweringProcessingTimes.click();

    await expect(page).toHaveURL(
      "https://tokero.dev/en/policies/answering-times/"
    );
    await expect(
      page.getByRole("heading", { name: "Request answering/processing times" })
    ).toBeVisible();
    await expect(page.locator("h1")).toContainText(
      "Request answering/processing times"
    );
  });

  test("Minimums and options", async ({ page }) => {
    const minimumsAndOptions = page
      .getByRole("link", {
        name: "Minimums And options",
      })
      .first();

    await expect(minimumsAndOptions).toBeVisible();
    await expect(minimumsAndOptions).toHaveText("Minimums and options");
    await expect(minimumsAndOptions).toBeEnabled();
    await minimumsAndOptions.click();

    await expect(page).toHaveURL(
      "https://tokero.dev/en/policies/minimums-and-options/"
    );
    await expect(
      page.getByRole("heading", { name: "Minimums and options" })
    ).toBeVisible();
    await expect(page.locator("h1")).toContainText("Minimums and options");
    await expect(page.locator("blazor-minimums-and-options_v5")).toContainText(
      "Please select the coin that you are interested to see details about."
    );
  });

  test("GDPR", async ({ page }) => {
    const gDPR = page.getByRole("link", { name: "GDPR" }).first();

    await expect(gDPR).toBeVisible();
    await expect(gDPR).toHaveText("GDPR");
    await expect(gDPR).toBeEnabled();
    await gDPR.click();

    await expect(page).toHaveURL("https://tokero.dev/en/policies/gdpr/");
    await expect(
      page.getByRole("heading", {
        name: "RIGHTS OF DATA SUBJECTS WITH REGARD TO THE PROCESSING OF PERSONAL DATA UNDER EU REGULATION 2016/679",
      })
    ).toBeVisible();
    await expect(page.locator("h1")).toContainText(
      "RIGHTS OF DATA SUBJECTS WITH REGARD TO THE PROCESSING OF PERSONAL DATA UNDER EU REGULATION 2016/679"
    );
  });

  test("Countries list for AML risk assessment", async ({ page }) => {
    const countriesListForAMLRiskAssessment = page.getByRole("link", {
      name: "Countries list for AML risk assessment",
    });

    await expect(countriesListForAMLRiskAssessment).toBeVisible();
    await expect(countriesListForAMLRiskAssessment).toHaveText(
      "Countries list for AML risk assessment"
    );
    await expect(countriesListForAMLRiskAssessment).toBeEnabled();
    await countriesListForAMLRiskAssessment.click();

    await expect(page).toHaveURL(
      "https://tokero.dev/en/policies/aml-countries/"
    );
    await expect(
      page.getByRole("heading", {
        name: "AML Country Status",
      })
    ).toBeVisible();
    await expect(page.locator("h1")).toContainText("AML Country Status");
    await expect(page.locator("tbody")).toContainText("Afghanistan");
  });

  test("Validate API request url for Policies list", async ({ page }) => {
    const [request] = await Promise.all([
      page.waitForRequest(
        (req) => req.method() === "GET" && req.url().includes("/policies")
      ),

      await page.getByRole("link", { name: "Policies list" }).click(),
    ]);

    expect(request.url()).toContain("policies");
  });

  test("Language switcher functionality", async ({ page }) => {
    await page.getByRole("link", { name: "Policies list" }).click();
    await expect(page).toHaveURL(/\/en\/policies\/$/);

    // Switch to Romanian
    await page.getByRole("button", { name: "EN" }).first().click();
    await page.getByRole("button", { name: "RO" }).click();
    await expect(page).toHaveURL(/\/ro\/policies\/$/);

    await expect(
      page.getByRole("heading", { name: "Politici și reguli TOKERO" })
    ).toBeVisible();

    // Switch back to English
    await page.getByRole("button", { name: "RO" }).first().click();
    await page.getByRole("button", { name: "EN" }).click();
    await expect(page).toHaveURL(/\/en\/policies\/$/);

    await expect(
      page.getByRole("heading", { name: "TOKERO policies and rules" })
    ).toBeVisible();
  });
});

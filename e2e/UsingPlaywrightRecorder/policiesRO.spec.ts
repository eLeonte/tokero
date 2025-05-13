import { test, expect } from "@playwright/test";

//This test is not refined, it was an expirement using the playwright recorder feature as I wanted to try it out

test("Policies list - validate each list can be accessed - Romanian", async ({
  page,
}) => {
  await page.goto("https://tokero.dev/ro/");

  await page.getByRole("button", { name: "Accept all cookies" }).click();

  await page.getByRole("link", { name: "Listă politici" }).click();
  await expect(
    page.getByRole("heading", { name: "Politici și reguli TOKERO" })
  ).toBeVisible();

  await expect(
    page
      .locator("blazor-policies_v5")
      .getByRole("link", { name: "Termeni și condiții" })
  ).toBeVisible();
  await expect(page.locator("blazor-policies_v5")).toContainText(
    "Termeni și condiții"
  );
  await page
    .locator("blazor-policies_v5")
    .getByRole("link", { name: "Termeni și condiții" })
    .click();
  await expect(
    page.getByRole("heading", { name: "Termeni și condiții de" })
  ).toBeVisible();

  await page.goto("https://tokero.dev/ro/policies/");

  await expect(
    page
      .locator("blazor-policies_v5")
      .getByRole("link", { name: "Confidențialitate" })
  ).toBeVisible();
  await expect(page.locator("blazor-policies_v5")).toContainText(
    "Confidențialitate"
  );
  await page
    .locator("blazor-policies_v5")
    .getByRole("link", { name: "Confidențialitate" })
    .click();
  await expect(
    page.getByRole("heading", { name: "Politica de confidențialitate" })
  ).toBeVisible();
  await expect(page.locator("h1")).toContainText(
    "Politica de confidențialitate"
  );

  await page.goto("https://tokero.dev/ro/policies/");

  await expect(
    page.getByRole("link", { name: "Taxe", exact: true })
  ).toBeVisible();
  await expect(page.locator("blazor-policies_v5")).toContainText("Taxe");
  await page.getByRole("link", { name: "Taxe", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "Taxe și durate" })
  ).toBeVisible();
  await expect(page.locator("h1")).toContainText("Taxe și durate");

  await page.goto("https://tokero.dev/ro/policies/");

  await expect(
    page.locator("blazor-policies_v5").getByRole("link", { name: "Cookies" })
  ).toBeVisible();
  await expect(page.locator("blazor-policies_v5")).toContainText("Cookies");
  await page
    .locator("blazor-policies_v5")
    .getByRole("link", { name: "Cookies" })
    .click();
  await expect(
    page.getByRole("heading", { name: "Politica de cookies" })
  ).toBeVisible();
  await expect(page.locator("h1")).toContainText("Politica de cookies");

  await page.goto("https://tokero.dev/ro/policies/");

  await expect(
    page.locator("blazor-policies_v5").getByRole("link", { name: "KYC" })
  ).toBeVisible();
  await expect(page.locator("blazor-policies_v5")).toContainText("KYC");
  await page
    .locator("blazor-policies_v5")
    .getByRole("link", { name: "KYC" })
    .click();
  await expect(
    page.getByRole("heading", { name: "Politica KYC și AML" })
  ).toBeVisible();
  await expect(page.locator("h1")).toContainText("Politica KYC și AML");

  await page.goto("https://tokero.dev/ro/policies/");

  await expect(page.getByRole("link", { name: "Afiliere" })).toBeVisible();
  await expect(page.locator("blazor-policies_v5")).toContainText("Afiliere");
  await page.getByRole("link", { name: "Afiliere" }).click();

  await expect(page.locator("h1")).toContainText(
    "TOKERO Affiliate Heroes Program"
  );
  await expect(
    page.getByRole("link", { name: "Autentifică-te și distribuie" }).first()
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Înregistrează-te azi" }).first()
  ).toBeVisible();
  await expect(page.locator("blazor-referral-program_v5")).toContainText(
    "Autentifică-te și distribuie link-ul prietenilor"
  );
  await expect(page.locator("blazor-referral-program_v5")).toContainText(
    "Înregistrează-te azi"
  );

  await page.goto("https://tokero.dev/ro/policies/");

  await expect(
    page
      .locator("blazor-policies_v5")
      .getByRole("link", { name: "Timpi de răspuns/procesare a" })
  ).toBeVisible();
  await expect(page.locator("blazor-policies_v5")).toContainText(
    "Timpi de răspuns/procesare a cererilor"
  );
  await page
    .locator("blazor-policies_v5")
    .getByRole("link", { name: "Timpi de răspuns/procesare a" })
    .click();
  await expect(
    page.getByRole("heading", { name: "Timpi de răspuns/procesare a" })
  ).toBeVisible();
  await expect(page.locator("h1")).toContainText(
    "Timpi de răspuns/procesare a cererilor"
  );

  await page.goto("https://tokero.dev/ro/policies/");

  await expect(
    page
      .locator("blazor-policies_v5")
      .getByRole("link", { name: "Minime și opțiuni" })
  ).toBeVisible();
  await expect(page.locator("blazor-policies_v5")).toContainText(
    "Minime și opțiuni"
  );
  await page
    .locator("blazor-policies_v5")
    .getByRole("link", { name: "Minime și opțiuni" })
    .click();
  await expect(
    page.getByRole("heading", { name: "Minime și opțiuni" })
  ).toBeVisible();
  await expect(page.getByRole("heading")).toContainText("Minime și opțiuni");

  await page.goto("https://tokero.dev/ro/policies/");

  await expect(
    page.locator("blazor-policies_v5").getByRole("link", { name: "GDPR" })
  ).toBeVisible();
  await expect(page.locator("blazor-policies_v5")).toContainText("GDPR");
  await page
    .locator("blazor-policies_v5")
    .getByRole("link", { name: "GDPR" })
    .click();
  await expect(
    page.getByRole("heading", { name: "DREPTURILE PERSOANELOR VIZATE" })
  ).toBeVisible();
  await expect(page.getByRole("heading")).toContainText(
    "DREPTURILE PERSOANELOR VIZATE DE PRELUCRĂRILE DE DATE CU CARACTER PERSONAL CONFORM REGULAMENTULUI UE 679/2016"
  );

  await page.goto("https://tokero.dev/ro/policies/");

  await expect(
    page.getByRole("link", { name: "Lista țărilor în analiza" })
  ).toBeVisible();
  await expect(page.locator("blazor-policies_v5")).toContainText(
    "Lista țărilor în analiza riscului de tip AML"
  );
  await page.getByRole("link", { name: "Lista țărilor în analiza" }).click();
  await expect(
    page.getByRole("heading", { name: "Statutul țării - AML" })
  ).toBeVisible();
  await expect(page.getByRole("heading")).toContainText("Statutul țării - AML");
  await expect(page.getByText("Afghanistan")).toBeVisible();
  await expect(page.locator("tbody")).toContainText("Afghanistan");
});

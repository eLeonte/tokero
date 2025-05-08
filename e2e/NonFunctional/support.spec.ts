import { test, expect } from "@playwright/test";
import { visitTokeroEng, validatePageTitle } from "../../support/helpers";

test("Contact us page details", async ({ page }) => {
  const sendMessageButton = page.getByRole("button", { name: "Send message" });
  const reasonLabel = page.locator("label", { hasText: "Reason" });
  const nameLabel = page.locator("label", { hasText: "Name" });
  const emailLabel = page.locator("label", { hasText: "Email address" });
  const phoneLabel = page.locator("label", { hasText: "Phone" });
  const messageLabel = page.locator("label", { hasText: "Message" });

  await visitTokeroEng(page);

  await page.getByRole("button", { name: "Accept all cookies" }).click();

  await page.getByTitle("Contact us").isVisible();
  await page
    .locator("header")
    .getByRole("link", { name: "Contact us" })
    .click();

  await page.getByTitle("Send us a message").isVisible();

  await expect(reasonLabel).toBeVisible();
  await expect(reasonLabel).toHaveText("Reason: *");
  await page.locator("#contact-form-reasons").click();
  await expect(page.getByText("General question")).toBeVisible();
  await expect(page.getByText("Deposit (crypto)")).toBeVisible();
  await expect(page.getByText("Deposit (fiat)")).toBeVisible();
  await expect(page.getByText("Withdrawal (crypto)")).toBeVisible();
  await expect(page.getByText("Withdrawal (fiat)")).toBeVisible();
  await expect(page.getByText("Failed trade")).toBeVisible();
  // await expect(page.getByText("Fees")).toBeVisible();
  await expect(page.getByText("New listings and waiting lists")).toBeVisible();
  await expect(page.getByText("TOKERO Academy")).toBeVisible();
  await expect(page.getByText("Limited account")).toBeVisible();
  await expect(page.getByText("Tap2Earn / Crypto Mayors Kombat")).toBeVisible();

  await expect(nameLabel).toBeVisible();
  await expect(nameLabel).toHaveText("Name: *");
  await page.locator("#contact-form-name").isEditable();

  await expect(emailLabel).toBeVisible();
  await expect(emailLabel).toHaveText("Email address: *");
  await page.locator("#contact-form-email").isEditable();

  await expect(phoneLabel).toBeVisible();
  await expect(phoneLabel).toHaveText("Phone number: *");
  await page.locator("#contact-form-phone").isEditable();

  await expect(messageLabel).toBeVisible();
  await expect(messageLabel).toHaveText("Message: *");
  await page.locator("#contact-form-message").isEditable();

  await expect(sendMessageButton).toBeVisible();
  await expect(sendMessageButton).toBeEnabled();
});

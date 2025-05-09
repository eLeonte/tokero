import { test, expect } from "@playwright/test";
import { visitTokeroEng } from "../../support/helpers";

test("Contact us page details", async ({ page }) => {
  const sendMessageButton = page.getByRole("button", { name: "Send message" });
  const reasonLabel = page.locator("label", { hasText: "Reason" });
  const nameLabel = page.locator("label", { hasText: "Name" });
  const emailLabel = page.locator("label", { hasText: "Email address" });
  const phoneLabel = page.locator("label", { hasText: "Phone" });
  const messageLabel = page.locator("label", { hasText: "Message" });

  visitTokeroEng(page);

  await page.getByTitle("Contact us").isVisible();
  page.locator("header").getByRole("link", { name: "Contact us" }).click();

  await page.getByTitle("Send us a message").isVisible();

  expect(reasonLabel).toBeVisible();
  expect(reasonLabel).toHaveText("Reason: *");

  page.locator("#contact-form-reasons").click();
  expect(page.getByText("General question")).toBeVisible();
  expect(page.getByText("Deposit (crypto)")).toBeVisible();
  expect(page.getByText("Deposit (fiat)")).toBeVisible();
  expect(page.getByText("Withdrawal (crypto)")).toBeVisible();
  expect(page.getByText("Withdrawal (fiat)")).toBeVisible();
  expect(page.getByText("Failed trade")).toBeVisible();
  expect(page.getByText("Fees", { exact: true })).toBeVisible();
  expect(page.getByText("New listings and waiting lists")).toBeVisible();
  expect(
    page.getByText("TOKERO Academy", { exact: true }).nth(0)
  ).toBeVisible();
  expect(page.getByText("Limited account")).toBeVisible();
  expect(page.getByText("Tap2Earn / Crypto Mayors Kombat")).toBeVisible();

  expect(nameLabel).toBeVisible();
  expect(nameLabel).toHaveText("Name: *");
  page.locator("#contact-form-name").isEditable();

  expect(emailLabel).toBeVisible();
  expect(emailLabel).toHaveText("Email address: *");
  page.locator("#contact-form-email").isEditable();

  expect(phoneLabel).toBeVisible();
  expect(phoneLabel).toHaveText("Phone number: *");
  page.locator("#contact-form-phone").isEditable();

  expect(messageLabel).toBeVisible();
  expect(messageLabel).toHaveText("Message: *");
  page.locator("#contact-form-message").isEditable();

  expect(sendMessageButton).toBeVisible();
  expect(sendMessageButton).toBeEnabled();
});

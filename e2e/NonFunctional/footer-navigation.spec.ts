import { test, expect } from "@playwright/test";
import { visitTokeroEng } from "../../support/helpers";

test.describe("Footer Social Media links", () => {
  test("Validate string urls", async ({ page }) => {
    await visitTokeroEng(page);

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    const socialLinks = [
      { name: "Facebook", url: "https://www.facebook.com/" },
      { name: "Twitter", url: "https://twitter.com/" },
      { name: "LinkedIn", url: "https://www.linkedin.com/" },
    ];

    for (const link of socialLinks) {
      const socialLink = page.getByRole("link", { name: link.name });
      if (await socialLink.isVisible()) {
        await expect(socialLink).toHaveAttribute(
          "href",
          expect.stringContaining(link.url)
        );
      }
    }
  });
});

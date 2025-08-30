import { expect, Locator, Page } from "@playwright/test";

export class VerificationPage {
  backHomeButton: Locator;
  verificationMessage: Locator;

  page: Page;

  constructor(page: Page) {
    this.page = page;
    this.backHomeButton = page.locator("#back-to-products");
    this.verificationMessage = page.locator(".complete-header");
  }
  // Click on the back home button
  async clickOnBackHomeButton() {
    await this.backHomeButton.click();
  }

  // Get the product price
  async checkVerificationMessage(message: string) {
    expect(await this.verificationMessage.textContent()).toBe(message);
  }
}

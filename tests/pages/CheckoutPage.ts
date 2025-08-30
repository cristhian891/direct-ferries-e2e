import { Locator, Page } from "@playwright/test";

export class CheckoutPage {
  firstNameInput: Locator;
  lastNameInput: Locator;
  postalCodeInput: Locator;
  continueButton: Locator;
  cancelButton: Locator;
  page: Page;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator("#first-name");
    this.lastNameInput = page.locator("#last-name");
    this.postalCodeInput = page.locator("#postal-code");
    this.continueButton = page.locator("#continue");
    this.cancelButton = page.locator("#cancel");
  }
  // Click on the continue button
  async clickOnContinueButton() {
    await this.continueButton.click();
  }
  // Fill in the checkout information fucntion
  async fillCheckoutInformation(
    firstName: string,
    lastName: string,
    postalCode: string
  ) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }
}

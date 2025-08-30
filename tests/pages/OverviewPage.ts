import { Locator, Page } from "@playwright/test";

export class OverviewPage {
  productName: Locator;
  productPrice: Locator;
  productTotalPrice: Locator;
  cancelButton: Locator;
  finishButton: Locator;
  page: Page;

  constructor(page: Page) {
    this.page = page;
    this.productName = page.locator(".inventory_item_name");
    this.productPrice = page.locator(".inventory_item_price");
    this.productTotalPrice = page.locator(".summary_total_label");
    this.finishButton = page.locator("#finish");
  }

  // Get the product name
  async getProductName() {
    return await this.productName.textContent();
  }
  // Get the product price
  async getProductPrice() {
    await this.productPrice.textContent();
  }

  // Click on the cancel button
  async clickOnCancelButton() {
    await this.cancelButton.click();
  }

  // Click on the finish button to complete the order
  async clickOnFinishButton() {
    await this.finishButton.click();
  }
}

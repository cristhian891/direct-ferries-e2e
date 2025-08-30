import { Locator, Page } from "@playwright/test";

export class CartPage {
  checkoutButton: Locator;
  ProductName: Locator;
  ProductPrice: Locator;
  page: Page;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.locator("#checkout");
    this.ProductName = page.locator(".inventory_item_name");
    this.ProductPrice = page.locator(".inventory_item_price");
  }
  // Click on the checkout button
  async clickOnCheckoutButton() {
    await this.checkoutButton.click();
  }

  // Get the product name
  async getProductName() {
    return await this.ProductName.textContent();
  }

  // Get the product price
  async getProductPrice() {
    await this.ProductPrice.textContent();
  }
}

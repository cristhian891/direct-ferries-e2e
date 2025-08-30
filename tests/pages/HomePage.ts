import { Locator, Page } from "@playwright/test";
import { test, expect } from "@playwright/test";

export class HomePage {
  checkoutIcon: Locator;
  ProductPricesArray: string[];

  page: Page;

  constructor(page: Page) {
    this.page = page;
    this.checkoutIcon = page.locator(".shopping_cart_link");
  }

  // Check I am on the home page
  async checkHomePage() {
    await this.page.waitForURL("https://www.saucedemo.com/inventory.html");
    await expect(this.page).toHaveTitle("Swag Labs");
  }

  // Click on the checkout icon
  async clickOnCheckoutIcon() {
    await this.checkoutIcon.click();
  }

  // Click on add to cart button for the most expensive product
  async addMostExpensiveProductToCart() {
    const prices = await this.page
      .locator(".inventory_item_price")
      .allTextContents();
    const maxPrice = Math.max(
      ...prices.map((price) => parseFloat(price.replace("$", "")))
    );
    const index = prices.findIndex(
      (price) => parseFloat(price.replace("$", "")) === maxPrice
    );
    const addToCartButtons = this.page
      .locator(".inventory_item")
      .locator("button");
    await addToCartButtons.nth(index).click();
  }
}

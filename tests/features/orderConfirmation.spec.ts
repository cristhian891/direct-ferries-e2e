import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { OverviewPage } from "../pages/OverviewPage";
import { VerificationPage } from "../pages/VerficationPage";
import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  await loginPage.navigate();
  // Login to the application with 'standard_user' user and 'secret_sauce' password
  await loginPage.login("standard_user", "secret_sauce");

  // Check I am logged in and I am on the home page
  await homePage.checkHomePage();
});

test("Check I can complete and order succesfully", async ({ page }) => {
  //Initialize page objects
  const homePage = new HomePage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const overviewPage = new OverviewPage(page);
  const verificationPage = new VerificationPage(page);

  await homePage.checkHomePage();

  // Click on add to cart button for the most expensive product
  await homePage.addMostExpensiveProductToCart();

  // Click on the add to cart Icon
  await homePage.clickOnCheckoutIcon();

  // Click on the checkout button
  await cartPage.clickOnCheckoutButton();

  // Fill in the checkout information
  await checkoutPage.fillCheckoutInformation("John", "Doe", "12345");

  // Click on the continue button
  await checkoutPage.clickOnContinueButton();

  // Verify that user has the correct product name and price in the overview page
  const productNameOverview = await overviewPage.getProductName();
  const productPriceOverview = await overviewPage.getProductPrice();

  expect(productNameOverview).toBe(await cartPage.getProductName());
  expect(productPriceOverview).toBe(await cartPage.getProductPrice());

  //Click on the finish button to complete the order
  await overviewPage.clickOnFinishButton();

  // Verify that the order is completed successfully
  await verificationPage.checkVerificationMessage("Thank you for your order!");
});

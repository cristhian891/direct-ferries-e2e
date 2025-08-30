import { Locator, Page } from "@playwright/test";

export class LoginPage {
  url: string = "https://www.saucedemo.com/";
  passwordInput: Locator;
  usernameInput: Locator;
  loginButton: Locator;
  page: Page;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("#user-name");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator("#login-button");
  }
  // Navigate to the main login page
  async navigate() {
    await this.page.goto(this.url);
  }

  // Ennter username
  async enterUsername(username: string, password: string) {
    await this.usernameInput.fill(username);
  }

  // Enter password
  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  // Enter username, password and click login button
  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

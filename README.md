# DF_Test Playwright Automation

## Table of Contents

- [Project Overview](#project-overview)
- [Setup Instructions](#setup-instructions)
- [How to Run the Tests](#how-to-run-the-tests)
- [Framework Structure Overview](#framework-structure-overview)
- [Possible Enhancements](#possible-enhancements)

---

## Project Overview

This repository contains end-to-end tests for the [SauceDemo](https://www.saucedemo.com/) web application using [Playwright](https://playwright.dev/) with Typescript. The framework contains a full e2e test that covers user flows such as login, product selection, checkout, and order verification.

The orderConfirmation.spec.ts file contains a single test that is executed in 3 browsers: Chrome, Firefox and Safari.

---

## Setup Instructions

1. **Clone the repository**

   ```sh
   git clone <your-repo-url>
   cd DF_Test
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **(Optional) Install browsers**
   Playwright automatically downloads browsers, but you can force install:
   ```sh
   npx playwright install
   ```

---

## How to Run the Tests

- **Run all tests**

  ```sh
  npm test
  ```

  or

  ```sh
  npx playwright test
  ```

- **Run a specific test file**

  ```sh
  npx playwright test tests/features/orderConfirmation.spec.ts
  ```

- **Run a test on playwright UI mode**

  ```sh
  npx playwright test --ui
  ```

- **View HTML test report**
  After running tests, open the generated report:
  ```sh
  npx playwright show-report
  ```
  The report is located in [playwright-report/index.html](playwright-report/index.html).

---

## Framework Structure Overview

This framework is using Page Object Model (POM) which treats each page as separate class so It becomes modular an easy to manatain.

```
DF_Test/
├── tests/
│   ├── features/                # Feature test specs (e.g., orderConfirmation.spec.ts)
│   ├── pages/                   # Page Object Model classes
│   │   ├── LoginPage.ts
│   │   ├── HomePage.ts
│   │   ├── CartPage.ts
│   │   ├── CheckoutPage.ts
│   │   ├── OverviewPage.ts
│   │   └── VerficationPage.ts
├── playwright.config.ts         # Playwright configuration
├── package.json                 # NPM scripts and dependencies
├── .gitignore                   # Ignore node_modules, reports, etc.
├── playwright-report/           # HTML test reports
└── test-results/                # Raw test results
```

### Page Object Model

- Each page class (e.g., [`CheckoutPage`](tests/pages/CheckoutPage.ts)) encapsulates selectors and actions for a specific page.
- Features (e.g., [`orderConfirmation.spec.ts`](tests/features/orderConfirmation.spec.ts)) use this folder to allocate readable, maintainable tests as spec.ts files.

### Configuration

- [`playwright.config.ts`](playwright.config.ts) defines test directory, browser projects, retries, parallelism, and reporting.

---

## Possible Enhancements

- **Test Data Management:** Use fixtures or external files for test data.
  For example all valid usernames and passwords can be store in external files.
- **Environment Support:** Add `.env` support for credentials and URLs.
- **Parallel Execution:** Optimize test parallelism for CI/CD.
- **Custom Reporters:** Integrate additional reporters (e.g., Allure). Reports can be customize and configure so they can be integrated in the CI/CD piple. html reporter would be
- **API Testing:** Add Playwright API tests for backend validation.
- **BDD Integration:** BDD approach can be used with Cucumber, implementing the use of .feature files and step_definitions. Instead of having .spec.ts file .feature files written in Gherkin can be used for readability and non-technical users.
- **Accessibility Checks:** Integrate accessibility assertions for specific components.
- **Visual Regression:** Use Playwright’s screenshot comparison for UI changes. This is a way of doing visual testing for heavy UI pages.
- **Error Handling:** Improve error messages and add retries for flaky steps. It is important to check API reponse time to validate waiting times after actions like clicking buttons or waiting for elements to displayed.
- **Reusable Components:** Refactor common actions into utility functions. Login or common actions can be refactor in an external file to reuse functions and expand the framework. For exmaple adding a specif product to the cart with a series of product of specifications.
- **Video recordings:** Playwright.conf.ts can be adjusted to add screen video recordings for each test execution so whenever there is failing test, the video can be played back to detect the issue.
- **Mobile Testing:** Enable and configure mobile browser projects.
- **Integration with lighthouse:** Lighthouse can be used to test UI performance metrics like LCP, FCP or speedIndex. Improving this will improve SEO overall by positioning a website higher in the google rankings.

---

## Support

For issues or questions contact @Christian Preciado QA Lead Engineer, please open an issue in this repository.

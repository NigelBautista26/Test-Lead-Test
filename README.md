# 🧪 Test-Lead-Test Framework

This is an automated test suite using Playwright to verify both functional and non-functional behavior of (https://automationintesting.online).  
It includes room booking flows, validation, and accessibility audits using `axe-core`.

---

## 📦 Tech Stack

- [Playwright](https://playwright.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [axe-core/playwright](https://www.npmjs.com/package/axe-core/playwright)

---

## 🚀 Getting Started

### 1. Install Dependencies

# Install all project dependencies (from package.json)

npm install

# Install Playwright (browsers + tools)

npx playwright install

# Install axe-playwright for accessibility testing

npm install -D axe-playwright

### 2. Run Functional Tests

npx playwright test e2e/tests/bookingTestScenarios.spec.ts

### 3. Run Accessibility Test

npx playwright test e2e/tests/accessibilityTest.spec.ts

> The test uses [axe-core](https://github.com/dequelabs/axe-core) to identify accessibility violations.  
> Violations are logged in the console and can also be seen in the test report.

---

## 📊 View Test Report

After running tests the report will open up and you can see the information in the generated report.

## 📁 Project Structure

e2e/
├── constants/ # Test data & user info
├── pages/ # Page Object files
├── tests/ # All test specs
├── utils/ # Custom helper functions
├── screenshots/ # Optional screenshots (if captured)
├── playwright-report/ # HTML report output
└── test-results/ # Raw test artifacts

## 📝 Other Docs

- [`test-plan.md`](./test-plan.md) – describes scope, tools, and test types
- [`bugs-report.md`](./bugs-report.md) – documents known issues (e.g. accessibility violations)

---

## ✅ Author Notes

- The test design favors clarity and modularity, using the page object model with functional programming approach.

- All inputs are managed from a central constant file to improve maintainability.
- Accessibility and Functional issues discovered are documented in the bug report.

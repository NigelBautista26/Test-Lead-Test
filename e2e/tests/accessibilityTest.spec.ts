import { test, expect } from "@playwright/test";
import { injectAxe, getViolations } from "axe-playwright";

test("♿ Accessibility audit on home page", async ({ page }) => {
  await page.goto("https://automationintesting.online");

  await injectAxe(page);
  const violations = await getViolations(page);

  console.log("Accessibility Violations:", violations);

  // Log the test
  expect.soft(violations.length).toBe(0);
});

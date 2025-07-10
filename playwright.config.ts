import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e/tests",
  use: {
    baseURL: "https://automationintesting.online",
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  reporter: [["list"], ["html"]],
});

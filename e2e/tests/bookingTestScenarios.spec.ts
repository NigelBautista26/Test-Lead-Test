import { test, expect } from "@playwright/test";
import {
  doubleRoomBookNowButton,
  singleRoomBookNowButton,
  suiteRoomBookNowButton,
} from "../pages/LandingPage";
import {
  fillInformation,
  firstNameAlert,
  lastNameAlert,
  mustNotBeEmptyAlert,
} from "../pages/roomsPage";
import { userDetails } from "../constants/userDetails";

test.describe("Sample of the prioritised test scenarios i chose to cover", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("User can book a single room with valid data", async ({ page }) => {
    await singleRoomBookNowButton(page).click();
    await fillInformation({
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      email: userDetails.email,
      phoneNumber: userDetails.phoneNumber,
    })(page);
  });

  test("User can book a double room with valid data", async ({ page }) => {
    await doubleRoomBookNowButton(page).click();
    await fillInformation({
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      email: userDetails.email,
      phoneNumber: userDetails.phoneNumber,
    })(page);
  });

  test("User can book a suite room with valid data", async ({ page }) => {
    await suiteRoomBookNowButton(page).click();
    await fillInformation({
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      email: userDetails.email,
      phoneNumber: userDetails.phoneNumber,
    })(page);
  });

  test("User attempts to book a room with missing first name", async ({
    page,
  }) => {
    await singleRoomBookNowButton(page).click();
    await fillInformation({
      lastName: userDetails.lastName,
      email: userDetails.email,
      phoneNumber: userDetails.phoneNumber,
    })(page);
    await expect(firstNameAlert(page)).toBeVisible();
  });

  test("User attempts to book a room with missing last name", async ({
    page,
  }) => {
    await singleRoomBookNowButton(page).click();
    await fillInformation({
      firstName: userDetails.firstName,
      email: userDetails.email,
      phoneNumber: userDetails.phoneNumber,
    })(page);
    await expect(lastNameAlert(page)).toBeVisible();
  });

  test("User attempts to book a room with missing email", async ({
    page,
  }) => {
    await singleRoomBookNowButton(page).click();
    await fillInformation({
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      phoneNumber: userDetails.phoneNumber,
    })(page);
    await expect(mustNotBeEmptyAlert(page)).toBeVisible();
  });

  test("User attempts to book a room with missing phone number", async ({
    page,
  }) => {
    await singleRoomBookNowButton(page).click();
    await fillInformation({
      firstName: userDetails.firstName,
      lastName: userDetails.lastName,
      email: userDetails.email,
    })(page);
    await expect(mustNotBeEmptyAlert(page)).toBeVisible();
  });
});

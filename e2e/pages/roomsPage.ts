import { Page } from "@playwright/test";
import {
  PageAction,
  PageLocator,
  getAlertByText,
  getByRole,
  getByText,
} from "../utils/pageUtils";

const reserveNowButton: PageLocator = getByRole({
  role: "button",
  name: "Reserve Now",
});

const firstNameField: PageLocator = getByRole({
  role: "textbox",
  name: "Firstname",
});

const lastNameField: PageLocator = getByRole({
  role: "textbox",
  name: "Lastname",
});

const emailField: PageLocator = getByRole({
  role: "textbox",
  name: "Email",
});

const phoneNumberField: PageLocator = getByRole({
  role: "textbox",
  name: "Phone",
});

export const firstNameAlert: PageLocator = getAlertByText(
  "Firstname should not be"
);

export const lastNameAlert: PageLocator = getByText(
  "Lastname should not be blank"
);

export const mustNotBeEmptyAlert: PageLocator = getByText("must not be empty");

type UserDetails = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
};

export const fillInformation = (user: UserDetails): PageAction => {
  return async (page: Page) => {
    await reserveNowButton(page).click();

    if (user.firstName) {
      await firstNameField(page).fill(user.firstName);
    }
    if (user.lastName) {
      await lastNameField(page).fill(user.lastName);
    }
    if (user.email) {
      await emailField(page).fill(user.email);
    }
    if (user.phoneNumber) {
      await phoneNumberField(page).fill(user.phoneNumber);
    }

    await reserveNowButton(page).click();
  };
};

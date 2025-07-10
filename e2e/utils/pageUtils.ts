import { Locator, Page } from "@playwright/test";

export type PageLocator = (page: Page) => Readonly<Locator>;
export type PageAction = (...args: any[]) => Promise<void>;

type Role =
  | "textbox"
  | "heading"
  | "button"
  | "combobox"
  | "option"
  | "alert"
  | "link"
  | "gridcell";

export const getByRole =
  ({ role, name }: { role: Role; name?: string }): PageLocator =>
  (page: Page) =>
    page.getByRole(role, { name });

export const getByText =
  (text: string): PageLocator =>
  (page: Page) =>
    page.getByText(text);

export const getByLocator =
  (selector: string): PageLocator =>
  (page: Page) =>
    page.locator(selector);

export const getAlertByText =
  (text: string | RegExp): PageLocator =>
  (page) =>
    page.getByRole("alert").filter({ hasText: text });

export const getRoomCardButton =
  (text: string | RegExp): PageLocator =>
  (page: Page) =>
    page.locator("div").filter({ hasText: text }).getByRole("link");

import { PageLocator, getRoomCardButton } from "../utils/pageUtils";

export const singleRoomBookNowButton: PageLocator = getRoomCardButton(
  /^£100 per nightBook now$/
);

export const doubleRoomBookNowButton: PageLocator = getRoomCardButton(
  /^£150 per nightBook now$/
);

export const suiteRoomBookNowButton: PageLocator = getRoomCardButton(
  /^£225 per nightBook now$/
);

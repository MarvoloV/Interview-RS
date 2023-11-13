// actions.ts
import { Action, UserData } from "./reducer";

export const setUserDataAction = (userData: UserData): Action => ({
  type: "SET_USER_DATA",
  payload: userData,
});

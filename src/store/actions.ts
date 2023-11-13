// actions.ts
import { Action, PlanData, UserData } from "./reducer";

export const setUserDataAction = (userData: UserData): Action => ({
  type: "SET_USER_DATA",
  payload: userData,
});
export const setPlanDataAction = (planData: PlanData): Action => ({
  type: "SET_PLAN_DATA",
  payload: planData,
});

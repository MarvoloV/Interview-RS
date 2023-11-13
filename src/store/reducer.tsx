// reducer.ts

export interface UserData {
  typeDocument: string;
  document?: string;
  cellphone?: string;
  fullName?: string;
  age?: number;
}
export interface PlanData {
  name: string;
  price: number;
}
export interface InitialData {
  user: UserData;
  plan: PlanData;
}

export type Action =
  | { type: "SET_USER_DATA"; payload: UserData }
  | { type: "SET_PLAN_DATA"; payload: PlanData };

export const initialState: InitialData = {
  user: {
    typeDocument: "",
    document: "",
    cellphone: "",
    fullName: "",
    age: 0,
  },
  plan: {
    name: "",
    price: 0,
  },
};

export const reducer = (state: InitialData, action: Action): InitialData => {
  switch (action.type) {
    case "SET_USER_DATA":
      return { ...state, user: action.payload };
    case "SET_PLAN_DATA":
      return { ...state, plan: action.payload };
    default:
      return state;
  }
};

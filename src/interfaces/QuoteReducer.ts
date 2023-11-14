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

import { rimacApi } from "./api";

export interface UserResponse {
  name: string;
  lastName: string;
  birthDay: string;
}

export const GetInfoUser = async () => {
  const response = await rimacApi.get<UserResponse>("/user.json");
  return response.data;
};

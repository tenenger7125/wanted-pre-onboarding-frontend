import { authService } from "../utils/services";
import { URL } from "../constants";

export const signup = async (form) => {
  const instance = authService();
  await instance.post(URL.SIGN_UP, form);
};

export const signin = async (form) => {
  const instance = authService();
  const { data } = await instance.post(URL.SIGN_IN, form);

  return data;
};

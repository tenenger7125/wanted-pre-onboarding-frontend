import { services } from "../utils";
import { URL } from "../constants";

const { auth: authService } = services;

const auth = {
  async signin(form) {
    const { data } = await authService().post(URL.SIGN_IN, form);
    return data;
  },
  async signup(form) {
    await authService().post(URL.SIGN_UP, form);
  },
};

export default auth;

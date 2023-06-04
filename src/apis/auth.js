import { authService } from "../utils/services";
import { URL } from "../constants";

const auth = () => {
  const instance = authService();

  return {
    async signin(form) {
      const { data } = await instance.post(URL.SIGN_IN, form);
      return data;
    },
    async signup(form) {
      await instance.post(URL.SIGN_UP, form);
    },
  };
};

export default auth;

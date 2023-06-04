import axios from "axios";

import { URL } from "../constants";

export const signup = async (form) => {
  try {
    await axios.post(URL.SIGN_UP, form, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return { isSignUp: true };
  } catch (err) {
    console.error(err);
    return { isSignUp: false };
  }
};

export const signin = async (form) => {
  try {
    const { data } = await axios.post(URL.SIGN_IN, form, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return data;
  } catch (err) {
    console.error(err);
    return { access_token: null };
  }
};

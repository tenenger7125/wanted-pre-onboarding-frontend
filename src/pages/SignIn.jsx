import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../apis";
import { setLocalStorage } from "../utils/localStorage";
import { emailValidate, passwordValidate } from "../utils/validate";
import { PATH } from "../constants";

const { signin } = auth();

const SignIn = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const isDisabled = !(emailValidate(form.email) && passwordValidate(form.password));

  const handleFieldChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();

    try {
      const { access_token } = await signin(form);

      setLocalStorage("access_token", access_token);
      navigate(PATH.TODO);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSignInSubmit}>
      <input data-testid="email-input" type="text" name="email" value={form.email} onChange={handleFieldChange} />
      <input
        data-testid="password-input"
        type="password"
        name="password"
        value={form.password}
        onChange={handleFieldChange}
      />
      <button data-testid="signin-button" type="submit" disabled={isDisabled}>
        로그인
      </button>
    </form>
  );
};

export default SignIn;

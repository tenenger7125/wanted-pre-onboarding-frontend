import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../apis/auth";
import { emailValidate, passwordValidate } from "../utils/validate";
import { PATH } from "../constants";

const { signup } = auth();

const SignUp = () => {
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

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    try {
      await signup(form);

      navigate(PATH.SIGN_IN);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSignUpSubmit}>
      <input data-testid="email-input" type="text" name="email" value={form.email} onChange={handleFieldChange} />
      <input
        data-testid="password-input"
        type="password"
        name="password"
        value={form.password}
        onChange={handleFieldChange}
      />
      <button data-testid="signup-button" type="submit" disabled={isDisabled}>
        회원가입
      </button>
    </form>
  );
};

export default SignUp;

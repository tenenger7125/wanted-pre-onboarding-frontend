import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button, Container, Input, Title } from "../components/common";
import { auth } from "../apis";
import { localStorages, validates } from "../utils";
import { PATH, TEST_ID } from "../constants";

const { signin } = auth;
const { email: emailValidate, password: passwordValidate } = validates;
const { setLocalStorage } = localStorages;

const SignIn = () => {
  const navigate = useNavigate();
  const [isErrored, setIsErrored] = useState(false);
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
      setIsErrored(false);
    } catch (err) {
      console.error(err);
      setIsErrored(true);
    }
  };

  return (
    <Container width="600px">
      <Title>원티드 프리온보딩 사전과제</Title>
      <form onSubmit={handleSignInSubmit}>
        <Input
          data-testid={TEST_ID.EMAIL_INPUT}
          type="text"
          name="email"
          placeholder="이메일"
          value={form.email}
          onChange={handleFieldChange}
          isErrored={isErrored}
          margin="0 0 15px"
        />
        <Input
          data-testid={TEST_ID.PASSWORD_INPUT}
          type="password"
          name="password"
          placeholder="패스워드"
          autoComplete="off"
          value={form.password}
          onChange={handleFieldChange}
          isErrored={isErrored}
        />
        <Button data-testid={TEST_ID.SIGNIN_BUTTON} type="submit" disabled={isDisabled} margin="20px 0">
          로그인
        </Button>
      </form>
      <Link to={PATH.SIGN_UP}>회원가입하러 가기</Link>
    </Container>
  );
};

export default SignIn;

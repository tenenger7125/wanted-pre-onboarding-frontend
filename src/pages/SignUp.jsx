import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button, Container, Input, Title } from "../components/common";
import { auth } from "../apis";
import { validates } from "../utils";
import { PATH } from "../constants";

const { signup } = auth;
const { email: emailValidate, password: passwordValidate } = validates;

const SignUp = () => {
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

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    try {
      await signup(form);

      navigate(PATH.SIGN_IN);
      setIsErrored(false);
    } catch (err) {
      console.error(err);
      setIsErrored(true);
    }
  };

  return (
    <Container width="600px">
      <Title>원티드 프리온보딩 사전과제</Title>
      <form onSubmit={handleSignUpSubmit}>
        <Input
          data-testid="email-input"
          type="text"
          name="email"
          placeholder="이메일"
          value={form.email}
          onChange={handleFieldChange}
          isErrored={isErrored}
          margin="0 0 15px"
        />
        <Input
          data-testid="password-input"
          type="password"
          name="password"
          placeholder="패스워드"
          autoComplete="off"
          value={form.password}
          onChange={handleFieldChange}
        />
        <Button data-testid="signup-button" type="submit" disabled={isDisabled} margin="20px 0">
          회원가입
        </Button>
      </form>
      <Link to={PATH.SIGN_IN}>로그인하러 가기</Link>
    </Container>
  );
};

export default SignUp;

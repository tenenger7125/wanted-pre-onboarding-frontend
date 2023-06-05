import styled from "styled-components";

const STitle = styled.h1`
  padding: 30px 0;
  text-align: center;
`;

const Title = ({ children }) => {
  return <STitle>{children}</STitle>;
};

export default Title;

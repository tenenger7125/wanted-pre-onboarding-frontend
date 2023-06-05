import styled from "styled-components";

const SContainer = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  margin: 0 auto;
  text-align: center;
`;

const Container = ({ children, ...rest }) => {
  return <SContainer {...rest}>{children}</SContainer>;
};

export default Container;

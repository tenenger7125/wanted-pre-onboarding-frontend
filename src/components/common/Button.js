import styled from "styled-components";

const SButton = styled.button`
  width: 100%;
  padding: 10px 20px;
  margin: ${(props) => props.margin};

  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => (props.variant === "outline" ? props.theme.colors.gray[9] : props.theme.colors.white[0])};

  background-color: ${(props) =>
    props.variant === "outline" ? props.theme.colors.gray[2] : props.theme.colors.blue[6]};
  border: none;
  border-radius: 5px;

  cursor: pointer;

  ${(props) =>
    props.disabled &&
    `
    color: ${props.theme.colors.gray[6]};
    cursor: not-allowed;
    background-color: ${props.theme.colors.gray[4]};
  `}
`;

const Button = ({ children, type = "button", ...rest }) => {
  return (
    <SButton type={type} {...rest}>
      {children}
    </SButton>
  );
};

export default Button;

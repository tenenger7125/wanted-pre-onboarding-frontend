import styled from "styled-components";

const SInput = styled.input.attrs((props) => ({
  type: props.type ?? "text",
}))`
  width: 100%;
  height: 42px;

  padding: 0 14px;
  margin: ${(props) => props.margin};
  font-size: 1rem;
  outline: none;
  border: 1px solid gray;
  border-radius: 5px;

  ${(props) =>
    props.isErrored &&
    `
    border-color: ${props.theme.colors.red[6]}
  `}
`;

const Input = ({ ...rest }) => {
  return <SInput {...rest} />;
};

export default Input;

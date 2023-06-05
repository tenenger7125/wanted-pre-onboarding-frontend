import { BsCheckSquare } from "react-icons/bs";
import styled from "styled-components";

export const STodoList = styled.ul`
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  label {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    margin-bottom: 10px;
    text-align: start;
  }
`;

export const SButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const SCheckBoxIcon = styled(BsCheckSquare)`
  color: ${(props) => (props.$isCompleted ? props.theme.colors.blue[6] : props.theme.colors.gray[4])};
  margin-right: 10px;
`;

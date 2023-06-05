import { useState } from "react";
import styled from "styled-components";
import { BsCheckSquare } from "react-icons/bs";

import { Button, Input } from "../../components/common";

const SButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const SCheckBoxIcon = styled(BsCheckSquare)`
  color: ${(props) => (props.$isCompleted ? props.theme.colors.blue[6] : props.theme.colors.gray[4])};
  margin-right: 10px;
`;

const TodoItem = ({ todo: { id, todo, isCompleted }, handleUpdateTodo, handleDeleteTodo }) => {
  const [modifyValue, setModifyValue] = useState(todo);
  const [isEdited, setEdited] = useState(false);

  const handleModifyTodo = (e) => setModifyValue(e.target.value.trim());

  const handleToggleEdit = () => {
    setEdited(!isEdited);
    setModifyValue(todo);
  };

  const handleUpdateContentTodo = async () => {
    await handleUpdateTodo(id, modifyValue, isCompleted);
    handleToggleEdit();
  };

  return (
    <li>
      <label>
        <SCheckBoxIcon size="1.5rem" $isCompleted={isCompleted} />
        <input type="checkbox" checked={isCompleted} onChange={() => handleUpdateTodo(id, todo, !isCompleted)} />
        {isEdited ? (
          <Input data-testid="modify-input" value={modifyValue} onChange={handleModifyTodo} />
        ) : (
          <span>{todo}</span>
        )}
      </label>
      <SButtonContainer>
        <Button
          data-testid={`${isEdited ? "submit" : "modify"}-button`}
          onClick={isEdited ? handleUpdateContentTodo : handleToggleEdit}
        >
          {isEdited ? "제출" : "수정"}
        </Button>
        <Button
          variant="outline"
          data-testid={`${isEdited ? "cancel" : "delete"}-button`}
          onClick={isEdited ? handleToggleEdit : () => handleDeleteTodo(id)}
        >
          {isEdited ? "취소" : "삭제"}
        </Button>
      </SButtonContainer>
    </li>
  );
};

export default TodoItem;

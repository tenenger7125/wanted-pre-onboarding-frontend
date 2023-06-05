import { useState } from "react";
import { Button, Input } from "../common";
import { SButtonContainer, SCheckBoxIcon } from "./Todo.style";

const TodoItem = ({ todo: { id, todo, isCompleted }, handleUpdateTodo, handleDeleteTodo }) => {
  const [modifyValue, setModifyValue] = useState(todo);
  const [isEdited, setEdited] = useState(false);

  const handleModifyTodo = (e) => setModifyValue(e.target.value.trim());

  const handleToggleEdit = () => {
    setEdited(!isEdited);
    setModifyValue(todo);
  };

  const handleUpdateContentTodo = () => {
    handleUpdateTodo(id, modifyValue, isCompleted);
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

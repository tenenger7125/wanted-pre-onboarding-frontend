import { useState } from "react";

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
        <input type="checkbox" checked={isCompleted} onChange={() => handleUpdateTodo(id, todo, !isCompleted)} />
        {isEdited ? (
          <input data-testid="modify-input" value={modifyValue} onChange={handleModifyTodo} />
        ) : (
          <span>{todo}</span>
        )}
      </label>
      {isEdited ? (
        <>
          <button data-testid="submit-button" onClick={handleUpdateContentTodo}>
            제출
          </button>
          <button data-testid="cancel-button" onClick={handleToggleEdit}>
            취소
          </button>
        </>
      ) : (
        <>
          <button data-testid="modify-button" onClick={handleToggleEdit}>
            수정
          </button>
          <button data-testid="delete-button" onClick={() => handleDeleteTodo(id)}>
            삭제
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;

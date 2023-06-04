const TodoInput = ({ handleCreateTodo }) => {
  return (
    <form onSubmit={handleCreateTodo}>
      <input data-testid="new-todo-input" name="newTodo" />
      <button data-testid="new-todo-add-button">추가</button>
    </form>
  );
};

export default TodoInput;

import { Input, Button } from "../../components/common";

const TodoInput = ({ handleCreateTodo }) => {
  return (
    <form onSubmit={handleCreateTodo}>
      <Input data-testid="new-todo-input" name="newTodo" placeholder="할일을 추가해보세요" />
      <Button data-testid="new-todo-add-button" type="submit" margin="15px 0 40px">
        추가
      </Button>
    </form>
  );
};

export default TodoInput;

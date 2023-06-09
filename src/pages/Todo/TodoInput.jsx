import { Input, Button } from "../../components/common";
import { TEST_ID } from "../../constants";

const TodoInput = ({ handleCreateTodo }) => {
  return (
    <form onSubmit={handleCreateTodo}>
      <Input data-testid={TEST_ID.NEW_TODO_INPUT} name="newTodo" placeholder="할일을 추가해보세요" />
      <Button data-testid={TEST_ID.NEW_TODO_ADD_BUTTON} type="submit" margin="15px 0 40px">
        추가
      </Button>
    </form>
  );
};

export default TodoInput;

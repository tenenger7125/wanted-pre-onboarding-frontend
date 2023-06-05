import { STodoList } from "./Todo.style";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, ...rest }) => {
  return (
    <STodoList>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} {...rest} />
      ))}
    </STodoList>
  );
};

export default TodoList;

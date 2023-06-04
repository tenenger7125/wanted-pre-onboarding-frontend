import TodoItem from "./TodoItem";

const TodoList = ({ todos, ...rest }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} {...rest} />
      ))}
    </ul>
  );
};

export default TodoList;

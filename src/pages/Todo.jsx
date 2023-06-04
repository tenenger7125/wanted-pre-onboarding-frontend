import { TodoInput, TodoList } from "../components/Todo";
import { useTodo } from "../hooks";

const Todo = () => {
  const { todos, handleCreateTodo, handleUpdateTodo, handleDeleteTodo } = useTodo();

  return (
    <>
      <TodoInput handleCreateTodo={handleCreateTodo} />
      <TodoList {...{ todos, handleUpdateTodo, handleDeleteTodo }} />
    </>
  );
};

export default Todo;

import { Container, Title } from "../../components/common";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import useTodo from "../../hooks/useTodo";

const Todo = () => {
  const { todos, handleCreateTodo, handleUpdateTodo, handleDeleteTodo } = useTodo();

  return (
    <Container width="600px">
      <Title>원티드 프리온보딩 사전과제</Title>
      <TodoInput handleCreateTodo={handleCreateTodo} />
      <TodoList {...{ todos, handleUpdateTodo, handleDeleteTodo }} />
    </Container>
  );
};

export default Todo;

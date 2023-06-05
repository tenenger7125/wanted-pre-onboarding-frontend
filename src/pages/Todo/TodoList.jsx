import styled from "styled-components";

import TodoItem from "./TodoItem";

const STodoList = styled.ul`
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  label {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    margin-bottom: 10px;
    text-align: start;
  }
`;

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

import { useEffect, useState } from "react";

import { createTodo, deleteTodo, getTodos, updateTodo } from "../apis/todo";

const useTodo = () => {
  const [todos, setTodos] = useState([]);

  const handleCreateTodo = async (e) => {
    e.preventDefault();

    const todo = await createTodo(e.target.newTodo.value.trim());

    e.target.newTodo.value = "";
    if (todo) setTodos([...todos, todo]);
  };

  const handleUpdateTodo = async (id, todo, isCompleted) => {
    const updatedTodo = await updateTodo(id, todo, isCompleted);

    if (updatedTodo) setTodos(todos.map((todo) => (todo.id === id ? { ...todo, ...updatedTodo } : todo)));
  };

  const handleDeleteTodo = async (id) => {
    const isDeleted = await deleteTodo(id);

    if (isDeleted) setTodos(todos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    (async () => {
      const todos = await getTodos();

      setTodos(todos);
    })();
  }, []);

  return { todos, handleCreateTodo, handleUpdateTodo, handleDeleteTodo };
};

export default useTodo;

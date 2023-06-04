import { useEffect, useState } from "react";

import { todo } from "../apis/todo";

const { createTodo, deleteTodo, getTodos, updateTodo } = todo();

const useTodo = () => {
  const [todos, setTodos] = useState([]);

  const handleCreateTodo = async (e) => {
    e.preventDefault();

    try {
      const todo = await createTodo(e.target.newTodo.value.trim());

      e.target.newTodo.value = "";
      setTodos([...todos, todo]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateTodo = async (id, todo, isCompleted) => {
    try {
      const updatedTodo = await updateTodo(id, todo, isCompleted);

      setTodos(todos.map((todo) => (todo.id === id ? { ...todo, ...updatedTodo } : todo)));
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);

      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const todos = await getTodos();

        setTodos(todos);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return { todos, handleCreateTodo, handleUpdateTodo, handleDeleteTodo };
};

export default useTodo;

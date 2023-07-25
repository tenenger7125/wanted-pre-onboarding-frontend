import { useEffect, useState } from "react";

import { todo } from "../apis";

const { createTodo, deleteTodo, getTodos, updateTodo } = todo;

const useTodo = () => {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  const handleNewTodoChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleCreateTodo = async (e) => {
    e.preventDefault();

    try {
      const todo = await createTodo(todoInput.trim());

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
    const controller = new AbortController();

    (async () => {
      try {
        const todos = await getTodos(controller.signal);

        setTodos(todos);
      } catch (err) {
        console.error(err);
      }
    })();

    return () => {
      controller.abort();
    };
  }, []);

  return { todoInput, todos, handleNewTodoChange, handleCreateTodo, handleUpdateTodo, handleDeleteTodo };
};

export default useTodo;

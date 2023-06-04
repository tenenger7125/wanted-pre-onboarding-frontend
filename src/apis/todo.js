import { getLocalStorage } from "../utils/localStorage";
import { todoService } from "../utils/services";
import { URL } from "../constants";

export const getTodos = async () => {
  const access_token = getLocalStorage("access_token");
  const instance = todoService(access_token);
  const { data } = await instance.get(URL.TODOS);

  return data;
};

export const createTodo = async (todo) => {
  const access_token = getLocalStorage("access_token");
  const instance = todoService(access_token);
  const { data } = await instance.post(URL.TODOS, { todo });

  return data;
};

export const updateTodo = async (id, todo, isCompleted) => {
  const access_token = getLocalStorage("access_token");
  const instance = todoService(access_token);
  const { data } = await instance.put(`${URL.TODOS}/${id}`, { todo, isCompleted });

  return data;
};

export const deleteTodo = async (id) => {
  const access_token = getLocalStorage("access_token");
  const instance = todoService(access_token);
  await instance.delete(`${URL.TODOS}/${id}`);
};

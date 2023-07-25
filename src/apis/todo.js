import { localStorages, services } from "../utils";
import { URL } from "../constants";

const { getLocalStorage } = localStorages;
const { todo: todoService } = services;

const todo = {
  async getTodos(signal) {
    const access_token = getLocalStorage("access_token");
    const { data } = await todoService(access_token).get(URL.TODOS, { signal });

    return data;
  },
  async createTodo(todo) {
    const access_token = getLocalStorage("access_token");
    const { data } = await todoService(access_token).post(URL.TODOS, { todo });

    return data;
  },
  async updateTodo(id, todo, isCompleted) {
    const access_token = getLocalStorage("access_token");
    const { data } = await todoService(access_token).put(`${URL.TODOS}/${id}`, { todo, isCompleted });

    return data;
  },
  async deleteTodo(id) {
    const access_token = getLocalStorage("access_token");
    await todoService(access_token).delete(`${URL.TODOS}/${id}`);
  },
};

export default todo;

import { getLocalStorage } from "../utils/localStorage";
import { todoService } from "../utils/services";
import { URL } from "../constants";

const todo = () => {
  const access_token = getLocalStorage("access_token");
  const instance = todoService(access_token);

  return {
    async getTodos() {
      const { data } = await instance.get(URL.TODOS);
      return data;
    },
    async createTodo(todo) {
      const { data } = await instance.post(URL.TODOS, { todo });
      return data;
    },
    async updateTodo(id, todo, isCompleted) {
      const { data } = await instance.put(`${URL.TODOS}/${id}`, { todo, isCompleted });
      return data;
    },
    async deleteTodo(id) {
      await instance.delete(`${URL.TODOS}/${id}`);
    },
  };
};

export default todo;

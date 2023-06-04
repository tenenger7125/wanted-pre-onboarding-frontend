import axios from "axios";

import { getLocalStorage } from "../utils/localStorage";
import { URL } from "../constants";

export const getTodos = async () => {
  const access_token = getLocalStorage("access_token");

  try {
    const { data } = await axios.get(URL.TODOS, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const createTodo = async (todo) => {
  const access_token = getLocalStorage("access_token");

  try {
    const { data } = await axios.post(
      URL.TODOS,
      { todo },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const updateTodo = async (id, todo, isCompleted) => {
  const access_token = getLocalStorage("access_token");

  try {
    const { data } = await axios.put(
      `${URL.TODOS}/${id}`,
      { todo, isCompleted },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const deleteTodo = async (id) => {
  const access_token = getLocalStorage("access_token");

  try {
    await axios.delete(`${URL.TODOS}/${id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};

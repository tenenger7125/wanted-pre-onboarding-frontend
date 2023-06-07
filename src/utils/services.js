import axios from "axios";

import { URL } from "../constants";

const instance = axios.create({
  baseURL: URL.BASE,
});

const service = {
  auth() {
    instance.interceptors.request.use(
      (config) => {
        if (config.method === "post" || config.method === "put") config.headers["Content-Type"] = "application/json";

        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );

    return instance;
  },
  todo(token) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    instance.interceptors.request.use(
      (config) => {
        if (config.method === "post" || config.method === "put") config.headers["Content-Type"] = "application/json";

        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );

    return instance;
  },
};

export default service;

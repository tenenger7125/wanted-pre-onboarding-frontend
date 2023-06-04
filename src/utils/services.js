import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop/",
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

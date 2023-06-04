const localStorages = {
  setLocalStorage(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
  },
  getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  },
};

export default localStorages;

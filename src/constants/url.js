const URL = {
  BASE: "https://www.pre-onboarding-selection-task.shop",
  get SIGN_UP() {
    return this.BASE + "/auth/signup";
  },
  get SIGN_IN() {
    return this.BASE + "/auth/signin";
  },
  get TODOS() {
    return this.BASE + "/todos";
  },
};

export default URL;

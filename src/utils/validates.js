const validate = {
  email(email) {
    return email.includes("@");
  },
  password(password) {
    return password.length >= 8;
  },
};

export default validate;

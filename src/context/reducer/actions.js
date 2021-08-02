export const logIn = (token) => {
  return { type: "log_in", token: token };
};

export const logOut = () => {
  return { type: "log_out" };
};

export const setUser = (user) => {
  return { type: "set_user", user: user };
};

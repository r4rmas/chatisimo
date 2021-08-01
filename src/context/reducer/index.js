const reducer = (state, action) => {
  switch (action.type) {
    case "log_in":
      localStorage.setItem("token", action.token);
      return { loggedIn: true };
    case "log_out":
      localStorage.removeItem("token");
      return { loggedIn: false };
    default:
      return state;
  }
};

export default reducer;

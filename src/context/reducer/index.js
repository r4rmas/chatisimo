const reducer = (state, action) => {
  switch (action.type) {
    case "log_in":
      localStorage.setItem("token", action.token);
      return { ...state, loggedIn: true };
    case "log_out":
      localStorage.removeItem("token");
      return { ...state, loggedIn: false };
    case "set_user":
      return { ...state, user: action.user };
    default:
      return state;
  }
};

export default reducer;

const reducer = (state, action) => {
  switch (action.type) {
    case "log_in":
      localStorage.setItem("token", action.token);
      return { ...state, loggedIn: true };
    case "log_out":
      localStorage.removeItem("token");
      return { loggedIn: false, user: {}, chatActive: null };
    case "set_user":
      return { ...state, user: action.user };
    case "set_chat":
      return { ...state, chatActive: action.chat };
    default:
      return state;
  }
};

export default reducer;

const InitialState = {
  loggedIn: localStorage.getItem("token") !== null,
  user: {},
};

export default InitialState;

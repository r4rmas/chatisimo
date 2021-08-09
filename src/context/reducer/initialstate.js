const InitialState = {
  loggedIn: localStorage.getItem("token") !== null,
  user: {},
  chatActive: null,
};

export default InitialState;

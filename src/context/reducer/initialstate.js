const InitialState = {
  loggedIn: localStorage.getItem("token") !== null,
};

export default InitialState;

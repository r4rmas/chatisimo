import React, { useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Context from "./context";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import { Screen } from "./styles";

const App = () => {
  const [{ loggedIn }] = useContext(Context);

  return (
    <Screen>
      <Router>
        <Header />
        {loggedIn ? (
          <Route path="/" component={Dashboard} />
        ) : (
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signin" component={Signin} />
            <Route path="/about" component={About} />
            <Route path="/" component={Home} />
          </Switch>
        )}
      </Router>
      <Footer />
    </Screen>
  );
};

export default App;

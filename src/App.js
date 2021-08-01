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
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
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
        <Switch>
          {loggedIn ? (
            <Route path="/dashboard" component={Dashboard} />
          ) : (
            <>
              <Route path="/signin" component={Signin} />
              <Route path="/signup" component={Signup} />
              <Route path="/about" component={About} />
              <Route path="/" component={Home} />
            </>
          )}
        </Switch>
      </Router>
      <Footer />
    </Screen>
  );
};

export default App;

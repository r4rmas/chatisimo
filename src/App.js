import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ContextProvider from "./components/ContextProvider";
import Header from "./components/Header";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import { Screen } from "./styles";

const App = () => {
  //usar Context y Reducer para manejar el logueo

  return (
    <ContextProvider>
      <Screen>
        <Router>
          <Header />
          <Switch>
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/about" component={About} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
        <Footer />
      </Screen>
    </ContextProvider>
  );
};

export default App;

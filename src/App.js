import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import { Screen } from "./styles";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Footer from "./components/Footer";

const App = () => (
  <Screen>
    <Router>
      <Header />
      <Switch>
        <Route path="/signin" component={Signin} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
    <Footer />
  </Screen>
);

export default App;

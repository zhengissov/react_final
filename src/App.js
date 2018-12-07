import React, { Component } from "react";
import { Route } from "react-router-dom";

import MainPage from "./pages/mainPage";
import SecondPage from "./pages/secondPage";
import ThirdPage from "./pages/thirdPage";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Route exact path="/" component={MainPage} />
        <Route path="/secondPage" component={SecondPage} />
        <Route path="/thirdPage" component={ThirdPage} />
      </div>
    );
  }
}

export default App;

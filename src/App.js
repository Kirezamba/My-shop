import React from "react";
import { Header } from "./components";
import { Route } from "react-router-dom";
import { Home, Cart } from "./components/pages";
import { useDispatch } from "react-redux";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/" component={Home} />
      </div>
    </div>
  );
}

export default App;

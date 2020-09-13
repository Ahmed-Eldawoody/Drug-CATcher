import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Screen1 from "./pages/Sreen1";
import Screen2 from "./pages/Sreen2";
import Screen3 from "./pages/Sreen3";
import "./styles.css";
//
//
//
//
//
export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Screen1 />
          <Link to="/screen2">
            you could request an appointment with our team
          </Link>
        </Route>
        <Route exact path="/screen2">
          <Screen2 />
        </Route>
        <Route exact path="/screen3">
          <Screen3 />
        </Route>
      </Switch>
    </div>
  );
}

import React from "react";
import Search from "./components/Search";
import Results from "./components/Results";
import Home from "./components/Home";
import Timer from "./components/Timer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { FormProvider } from "./resources/Form";

import "./App.css";

function App() {
  return (
    <Router>
      <FormProvider>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/game">
              <Search />
              <Timer />
              <Results />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </div>
      </FormProvider>
    </Router>
  );
}

export default App;

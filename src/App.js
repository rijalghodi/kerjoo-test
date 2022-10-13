import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { TestFlex } from "./components/TestFlex/TestFlex";
import { TestGrid } from "./components/TestGrid/TestGrid";
import { TestDropdown } from "./components/TestDropdown/TestDropdown";

function App() {
  return (
    <Router>
      <Route path={"/test-grid"}>
        <TestGrid />
      </Route>
      <Route path={"/test-flex"}>
        <TestFlex />
      </Route>
      <Route path={"/test-dropdown"}>
        <TestDropdown />
      </Route>
    </Router>
  );
}

export default App;

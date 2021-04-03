import React from 'react';
import './App.css';
import Header from "./Header.js";
import SideBar from "./SideBar.js";
import Mail from "./Mail";
import EmailList from "./EmailList";
import {BrowserRouter as Router , Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <div class="app_body">
          <SideBar />

          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

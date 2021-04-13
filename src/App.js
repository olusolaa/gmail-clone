import React from 'react';
import './App.css';
import Header from "./Header.js";
import SideBar from "./SideBar.js";
import Mail from "./Mail";
import EmailList from "./EmailList";
import {BrowserRouter as Router , Switch, Route, Link} from "react-router-dom";
import SendMail from "./SendMail"
import {useSelector} from "react-redux"

function App() {
  const sendMailState = useSelector((state)=>state.mail.sendMessageIsOpen);
  return (
    <Router>
      <div className="app">
        <Header />

        <div className="app_body">
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
        {sendMailState ? <SendMail /> : null}
      </div>
    </Router>
  );
}

export default App;

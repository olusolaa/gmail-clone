import React, {useEffect} from 'react';
import './App.css';
import Header from "./Header.js";
import SideBar from "./SideBar.js";
import Mail from "./Mail";
import EmailList from "./EmailList";
import {BrowserRouter as Router , Switch, Route, Link} from "react-router-dom";
import SendMail from "./SendMail"
import {useSelector, useDispatch} from "react-redux"
import {selectSendMessageIsOpen} from "./features/mailSlice"
import { selectUser, login } from "./features/userSlice";
import { auth } from "./firebase";
import Login from "./Login"


function App() {
  // const sendMailState = useSelector((state)=>state.mail.sendMessageIsOpen);
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged(user=>{
			if(user){
				// the user is logged in
				dispatch(
					login({
						displayName: user.displayName,
						email: user.email,
						photoUrl: user.photoURL
					})
				)
			}
		})
	}, []);

  return (
    <Router>
      {
      !user ? (<Login />
      ) : 
      (
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
        {sendMessageIsOpen && <SendMail />}
        {/* {sendMailState ? <SendMail /> : null} */}
      </div>
      )}
    </Router>
  );
}

export default App;

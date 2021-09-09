import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar state={props.store.getState().friends} />
        <div className="app-wrapper-content">
          <Route
            exact
            path="/profile/:userId?"
            render={() => <ProfileContainer />}
          />
          <Route exact path="/dialogs" render={() => <DialogsContainer />} />
          <Route exact path="/users" render={() => <UsersContainer />} />
          <Route exact path="/News" component={News} />
          <Route exact path="/music" component={Music} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/login" component={Login} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

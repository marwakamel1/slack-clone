import React, { Fragment, useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";

function App({ authedUser }) {
  return (
    <div className="app">
      <Router>
        {!authedUser ? (
          <Login />
        ) : (
          <Fragment>
            <LoadingBar style={{ backgroundColor: "white" }} />
            <Header />

            <div className="app_body">
              <SideBar />
              <Switch>
                <Route path="/room/:roomID">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>welcome</h1>
                </Route>
              </Switch>
            </div>
          </Fragment>
        )}
      </Router>
    </div>
  );
}
function mapStateToProps({ authedUser }) {
  return { authedUser };
}
export default connect(mapStateToProps)(App);

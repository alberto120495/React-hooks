import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import AboutScreen from "./AboutScreen";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import NotFoundScreen from "./NotFoundScreen";
function AppRouter() {
  return (
    <Router>
      <div>
        <NavBar />

        <div className="container">
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/about" component={AboutScreen} />
            <Route exact path="/login" component={LoginScreen} />
            <Route component={NotFoundScreen} /> {/*<Redirect to='/'/> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default AppRouter;

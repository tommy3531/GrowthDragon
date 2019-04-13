import React, { Component } from "react";
import { 
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import { withRouter } from 'react-router-dom';
import AuthService from '../helper/authService';

// Pages
import Member from "../pages/Member";
import Landing from "../pages/Landing";

import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import Profile from "../pages/Profile";
import TopNav from "../common/TopNav";
import EditProfile from "../pages/EditProfile";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      userData: {}
    };
    this.Auth = new AuthService();

  }

  componentWillMount() {
    console.log("AUTH: " + this.Auth.getToken());
    if(this.Auth.loggedIn()){
      this.state.loggedIn = true;
      console.log("MAIN: You are logged in");
      // this.props.history.replace("/member");
    } else {
        console.log("MAIN: Need to be logged in");
        this.state.loggedIn = false
        // this.props.history.replace("/login");
    }
  }

  componentDidUnmount() {
  }
  
  render() {
        const { loggedIn } = this.state.loggedIn;

    return (
      <Router>
          <section class="hero is-info is-fullheight">
                  <Switch>
                      <Route exact path="/" component={Landing} />
                      <Route path="/signin" component={SignIn} />
                      <Route path="/register" component={Register} />
                      <Route path="/profile" render={() => <Profile mainIsLoggedIn={this.state.user} userData={this.state.userData}></Profile>} />
                      <Route path="/member" component={Member} />
                      <Route path="/editprofile" render={() => <EditProfile mainIsLoggedIn={this.state.user} userData={this.state.userData}></EditProfile>} />
                  </Switch>
          </section>
      </Router>
    );
  }
}

export default Main;
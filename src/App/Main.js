import React, { Component } from "react";
import { 
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import fire from "../helper/Firebase";

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
      user: false,
      userData: {}
    };
  }

  componentDidMount() {
    this.listener = fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user: true, userData: user });
      } else {
        this.setState({ user: false })
      }
    })
  }

  componentDidUnmount() {
    this.listener();
  }

  render() {
    return (
        <Router>
            <section class="hero is-info is-fullheight">
                <TopNav mainIsLoggedIn={this.state.user} />
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route path="/signin" component={SignIn} />
                        <Route path="/register" component={Register} />
                        <Route path="/profile" render={() => <Profile mainIsLoggedIn={this.state.user} userData={this.state.userData}></Profile>} />
                        <Route path="/member" render={() => <Member mainIsLoggedIn={this.state.user}></Member>} />
                        <Route path="/editprofile" render={() => <EditProfile mainIsLoggedIn={this.state.user} userData={this.state.userData}></EditProfile>} />

                    </Switch>
            </section>

        </Router>
    );
  }
}

export default Main;
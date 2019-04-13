import React, {Component} from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { toast } from 'bulma-toast';
import fire from '../../helper/Firebase';
import AuthService from '../../helper/authService';
import TopNav from "../../common/TopNav";


class Member extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            username: ''
        };
        this.Auth = new AuthService();

    }

    componentWillMount() {
        // WTH rewrite x2
        console.log("Member AUTH: " + this.Auth.getToken())
        if(this.Auth.loggedIn()){
            console.log("Member You are logged in");
            this.state.loggedIn = true;

        } else {
            console.log("Member Need to be logged in")
            this.props.history.replace('/');

        }
    }

    render() {
        return (

            <div>
                <TopNav mainIsLoggedIn={this.state.loggedIn} />
                <h1>Member Area</h1>
            </div>   
        );
    }      
}

export default Member;

import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import TopNav from "../../common/TopNav";
import AuthService from '../../helper/authService';


const INITIAL_STATE = {
    username: '',
    fullname: '',
    email: '',
    phone: '',
    birthday: '',
    passwordOne: '',
    passwordTwo: '',
    loggedIn: false
}

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE};
        this.onSubmit = this.onSubmit.bind(this);
        this.Auth = new AuthService();
    }

    componentWillMount() {
        // WTH rewrite x3
        if(this.Auth.loggedIn()){
            console.log("Register You are logged in");
            this.props.history.replace('/member');
            this.state.loggedIn = true;

        } else {
            console.log("Register Need to be logged in");


        }
    }

    onSubmit = event => {
        event.preventDefault();
        console.log("EAMIL: " + this.state.email);
        console.log("PASSWORD: " + this.state.passwordOne);
        const user = {
            username: this.state.username,
            password: this.state.passwordOne,
            email: this.state.email

        }
        console.log("User: " + user.email);
        fetch("http://localhost:8080/user/postRegister",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(data => {
            const jsonError = JSON.stringify(data);
            const jsonParse = JSON.parse(jsonError);
            console.log("ServerResponse: " + jsonError);
            
        })
        .catch(err => {
            console.log("Error: " + JSON.stringify(err));
        })
    };

    onChange = event => {
        this.setState({[event.target.name]: event.target.value });

    };

    render() {

        const {
            username,
            fullname,
            email,
            phone,
            birthday,
            passwordOne,
            passwordTwo,
        } =  this.state;

        return (
            <div>
            <TopNav mainIsLoggedIn={this.state.loggedIn} />
            <section class="hero is-info is-fullheight">
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <div class="column is-4 is-offset-4">
                            <h3 class="title">Register</h3>
                            <p class="subtitle">Please Register.</p>
                            <div class="box">
                                <form onSubmit={this.onSubmit}>
                                    <div class="field">
                                        <div class="control">
                                            <input
                                                name="username" 
                                                class="input is-large" 
                                                value={username}
                                                onChange={this.onChange}
                                                type="text" 
                                                placeholder="Username" 
                                            />
                                        </div>
                                    </div>
                                    <div class="field">
                                        <div class="control">
                                            <input
                                                name="fullname" 
                                                class="input is-large" 
                                                value={fullname}
                                                onChange={this.onChange}
                                                type="text" 
                                                placeholder="fullname" 
                                            />
                                        </div>
                                    </div>
                                    <div class="field">
                                        <div class="control">
                                            <input
                                                name="email"
                                                class="input is-large" 
                                                type="text"
                                                value={email} 
                                                onChange={this.onChange} 
                                                placeholder="Your Email" 
                                            />
                                        </div>
                                    </div>
                                    <div class="field">
                                        <div class="control">
                                            <input
                                                name="phone" 
                                                class="input is-large" 
                                                value={phone}
                                                onChange={this.onChange}
                                                type="text" 
                                                placeholder="phone" 
                                            />
                                        </div>
                                    </div>
                                    <div class="field">
                                        <div class="control">
                                            <input
                                                name="birthday" 
                                                class="input is-large" 
                                                value={birthday}
                                                onChange={this.onChange}
                                                type="text" 
                                                placeholder="birthday" 
                                            />
                                        </div>
                                    </div>
                                    <div class="field">
                                        <div class="control">
                                            <input 
                                                class="input is-large" 
                                                value={passwordOne}
                                                onChange={this.onChange}
                                                name="passwordOne" 
                                                type="password" 
                                                placeholder="Password" 
                                            />
                                        </div>
                                    </div>
                                    <div class="field">
                                        <div class="control">
                                            <input 
                                                name="passwordTwo"
                                                class="input is-large" 
                                                value={passwordTwo}
                                                onChange={this.onChange}
                                                type="password" 
                                                placeholder="Confirm Password" 
                                            />
                                        </div>
                                    </div>
                                    <button type="submit" class="button is-block is-info is-large is-fullwidth">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
            </div>       
        )
    }      
}

export default Register;
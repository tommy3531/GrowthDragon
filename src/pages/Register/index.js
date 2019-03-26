import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import fire from "../../helper/Firebase";


const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
    success: false
}

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE};
        this.onSubmit = this.onSubmit.bind(this);
    }

    // TODO: Clean this up
    onSubmit = event => {
        const { passwordOne, username, fullname, email, phone, birthday } = this.state;

        event.preventDefault();

        const userprofile = {
            username: username,
            fullname: fullname,
            email: email,
            phone: phone,
            birthday: birthday
        }

        fire.auth().createUserWithEmailAndPassword(email, passwordOne)
            .then(() => {
                const uid = fire.auth().currentUser.uid;
                const userDB = fire.database().ref('users/' + uid + '/basicInformation');
                this.setState({ success: true });
                console.log("Register username: " + username);
                userDB.update(userprofile);
                this.props.history.push({pathname: "/profile", state: this.state.success});
            })
            .catch(error => {
                this.setState({ error });
            });
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
            error,
            success,
        } =  this.state;

        return (
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
                                    {error && <p>{error.message}</p>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>        
        )
    }      
}

export default withRouter(Register);
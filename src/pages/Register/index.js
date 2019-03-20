import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import TopNav from '../../common/TopNav';
import fire from "../../helper/Firebase";


const INITIAL_STATE = {
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
    success: false
}

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE, success: false};
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit = event => {
        const { email, passwordOne } = this.state;

        fire.auth().createUserWithEmailAndPassword(email, passwordOne)
            .then((user) => {
                this.setState({ success: true });
                console.log("Register: " + this.state.success);
                this.props.history.push({pathname: "/profile", state: this.state.success});
            })
            .catch(error => {
                this.setState({ error });
            });
        event.preventDefault();
    };

    onChange = event => {
        this.setState({[event.target.name]: event.target.value });

    };

    render() {

        const {
            email,
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
                            <p class="subtitle">Please register below</p>
                            <div class="box">	
                                <h1>{this.error}</h1>
                                <form onSubmit={this.onSubmit}>
                                    <input
                                        name="email"
                                        value={email}
                                        onChange={this.onChange}
                                        type="text"
                                        placeholder="Email"
                                    />
                                    <input
                                        name="passwordOne"
                                        value={passwordOne}
                                        onChange={this.onChange}
                                        type="password"
                                        placeholder="Password"
                                    />
                                    <input
                                        name="passwordTwo"
                                        value={passwordTwo}
                                        onChange={this.onChange}
                                        type="password"
                                        placeholder="Confirm Password"
                                    />
                                    <button onClick={this.onClick}>Sign Up</button>
                                    {error && <p>{error.message}</p>}
                                </form>
                            </div>
                            <p>
                                Already have an account?
                                <Link to="/SignIn">Log In</Link>
                            </p>
                        </div>
                    </div>
                </div>     
            </section>        
        )
    }      
}

export default withRouter(Register);
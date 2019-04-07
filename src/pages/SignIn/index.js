import React, { Component } from 'react';
import BottomNav from '../../common/BottomNav';
import fire from '../../helper/Firebase';
import { withRouter } from 'react-router-dom';
import { toast } from 'bulma-toast';
import { withFormik } from 'formik';
import Yup from 'yup';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            email: '', 
            password: '' ,
            success: false
            
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit = event => {

        event.preventDefault();
        const user = {
            password: this.state.password,
            email: this.state.email

        }
        fetch("http://localhost:8080/user/postLogin",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(data => {
            const json = JSON.stringify(data);
            const jsonParse = JSON.parse(json);
            console.log(jsonParse.success);
            if(jsonParse.success){
                console.log("SUCCESSS");
                this.props.history.replace("/");
            } else {
                console.log("NO SUCCESS");
            }
            
        })
        .catch(err => {
            console.log("Error: " + JSON.stringify(err));
        })
    };

    onChange = event => {
        this.setState({[event.target.name] : event.target.value });
    };

    render() {
        const { email, password, error } = this.state;
        const isInvalid = password === '' || email === '';

        return(

            <section class="hero is-info is-fullheight">
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <div class="column is-4 is-offset-4">
                            <h3 class="title">Login</h3>
                            <p class="subtitle">Please login to proceed.</p>
                            <div class="box">
                                <figure class="avatar">
                                    <img src="https://placehold.it/128x128" alt="placeholder"/>
                                </figure>
                                <form onSubmit={this.onSubmit}>
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
                                                class="input is-large" 
                                                value={password}
                                                onChange={this.onChange}
                                                name="password" 
                                                type="password" 
                                                placeholder="Your Password" 
                                            />
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="checkbox">
                                            <input 
                                                type="checkbox" 
                                            />
                                            Remember me
                                        </label>
                                    </div>
                                    <button type="submit" class="button is-block is-info is-large is-fullwidth">Login</button>
                                    {error && <p>{error.message}</p>}
                                </form>
                            </div>
                            <p>
                                <a href="../">Sign Up</a> &nbsp;·&nbsp;
                                <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                                <a href="../">Need Help?</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default withRouter(SignIn);


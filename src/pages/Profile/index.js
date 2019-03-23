import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { toast } from 'bulma-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';




class Profile extends React.Component {
    constructor(props){
        super(props);
    }    
    componentWillMount() {
        if(this.props.mainIsLoggedIn){
            console.log("Members is true");
        } else {
            console.log("Member is not logged in redirect to");
            console.log("Props: " + this.props.history)
            toast({
                message: "You must be logged In",
                type: "is-danger",
                dismissible: true,
                animate: {in: "fadeIn", out: "fadeOut"}
            })
            this.props.history.replace("/");
        }
    }
    render() {
        return (
            <section class="hero is-info is-fullheight">
                <div class="container">
                    <div class="tile is-ancestor">
                        <div class="tile is-4 is-parent">
                            <article class="tile is-child box">
                                <p class="usertitle">Hello, {this.props.userData.email}</p>
                                <figure class="image is-4by3">
                                    <img src="https://bulma.io/images/placeholders/640x480.png"></img>
                                </figure>
                            </article>
                        </div>
                        <div class="tile is-4 is-parent">
                            <div class="tile is-child box">
                                <p class="boxtitle">Basic Information</p>
                                <form>
                                    <div class="field">
                                        <label class="label">Name</label>
                                        <div class="control has-icons-left">
                                            <input class="input" type="text" placeholder="FullName" />
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-user"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">Email</label>
                                        <div class="control has-icons-left">
                                            <input class="input" type="text" placeholder="Email" />
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-envelope"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">Phone</label>
                                        <div class="control has-icons-left">
                                            <input class="input" type="text" placeholder="Phone" />
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-phone"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">Birthday</label>
                                        <div class="control has-icons-left">
                                            <input class="input" type="text" placeholder="Birthday" />
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-calendar"></i>
                                            </span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="tile is-4 is-parent">
                            <div class="tile is-child box">
                                <p class="boxtitle">Mailing Address</p>
                                <form>
                                    <div class="field">
                                        <label class="label">Address</label>
                                        <div class="control has-icons-left">
                                            <input class="input" type="text" placeholder="Address" />
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-home"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">City</label>
                                        <div class="control has-icons-left">
                                            <input class="input" type="text" placeholder="City" />
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-home"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">State</label>
                                        <div class="control has-icons-left">
                                            <input class="input" type="text" placeholder="State" />
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-home"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">Zipcode</label>
                                        <div class="control has-icons-left">
                                            <input class="input" type="text" placeholder="Zipcode" />
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-home"></i>
                                            </span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="tile is-ancestor">
                        <div class="tile is-parent">
                            <div class="tile is-child box">
                                <p class="boxtitle">Social</p>
                                <form>
                                    <div class="field">
                                        <label class="label">imdb</label>
                                        <div class="control has-icons-left">
                                            <input class="input" type="text" placeholder="imdb" />
                                            <span class="icon is-small is-left">
                                                <i class="fab fa-imdb"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">Facebook</label>
                                        <div class="control has-icons-left">
                                            <input class="input" type="text" placeholder="Facebook" />
                                            <span class="icon is-small is-left">
                                                <i class="fab fa-facebook"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">Twitter</label>
                                        <div class="control has-icons-left">
                                            <input class="input" type="text" placeholder="Twitter" />
                                            <span class="icon is-small is-left">
                                                <i class="fab fa-twitter"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">Foursquare</label>
                                        <div class="control has-icons-left">
                                            <input class="input" type="text" placeholder="Foursquare" />
                                            <span class="icon is-small is-left">
                                                <i class="fab fa-foursquare"></i>
                                            </span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            );
                                }
    };      


export default withRouter(Profile);
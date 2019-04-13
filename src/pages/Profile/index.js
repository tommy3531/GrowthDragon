import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AuthService from '../../helper/authService';
import TopNav from "../../common/TopNav";

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            phone: '',
            curAddress: '',
            city: '',
            state: '',
            zipcode: '',
            birthday: '',
            imdb: '',
            facebook: '',
            twitter: '',
            foursquare: '',
            loggedIn: false


        };
        this.onSubmit = this.onSubmit.bind(this);
        this.Auth = new AuthService();

    }    
    componentWillMount() {
        // Yep rewrite x4, figure it out!!!!
        if(this.Auth.loggedIn()) {
            console.log("SignIN: You are logged in");
            this.state.loggedIn = true;

        } else {
            console.log("SignIN: You are not logged in");
            this.props.history.replace("/");
        }
    }

    onSubmit = event => {

    };

    onChange = event => {
        this.setState({[event.target.name] : event.target.value });
    };

    render() {
        const { username, email, phone, birthday, imdb, facebook, twitter, foursquare, curAddress, city, state, zipcode } = this.state;
        return (
            <div>
                <TopNav mainIsLoggedIn={this.state.loggedIn} />

            <section class="hero is-info is-fullheight">
                <div class="container">
                    <div class="tile is-ancestor">
                        <div class="tile is-4 is-parent">
                            <article class="tile is-child box">
                                <p class="boxtitle">Hello, {username}</p>
                                <figure class="image is-4by3">
                                    <img src="https://bulma.io/images/placeholders/640x480.png"></img>
                                </figure>
                                <button onClick={this.onSubmit} type="submit" class="button is-block is-info">Submit</button>
                            </article>
                        </div>
                        <div class="tile is-4 is-parent">
                            <div class="tile is-child box">
                                <p class="boxtitle">Basic Information</p>
                                <form onSubmit={this.onSubmit}>
                                    <div class="field">
                                        <label class="label">Username</label>
                                        <div class="control has-icons-left">
                                            <input 
                                                name="username"
                                                class="input"
                                                type="text"
                                                onChange={this.onChange}
                                                value={username}
                                                placeholder="username"
                                            />
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-user"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">Email</label>
                                        <div class="control has-icons-left">
                                            <input 
                                                name="email"
                                                class="input"
                                                type="text" 
                                                onChange={this.onChange}
                                                value={email} 
                                                placeholder="Email" 
                                            />
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-envelope"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">Phone</label>
                                        <div class="control has-icons-left">
                                            <input
                                                name="phone" 
                                                class="input"
                                                type="text" 
                                                onChange={this.onChange}
                                                value={phone}
                                                placeholder="Phone" 
                                            />
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-phone"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">Birthday</label>
                                        <div class="control has-icons-left">
                                            <input 
                                                name="birthday"
                                                class="input" 
                                                type="text" 
                                                onChange={this.onChange}
                                                value={birthday}
                                                placeholder="Birthday"
                                            />
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
                                            <input 
                                                name="curAddress"
                                                class="input" 
                                                type="text"
                                                onChange={this.onChange}
                                                value={curAddress} 
                                                placeholder="Address" 
                                            />
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-home"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">City</label>
                                        <div class="control has-icons-left">
                                            <input 
                                                name="city"
                                                class="input" 
                                                type="text" 
                                                onChange={this.onChange}
                                                value={city}
                                                placeholder="City" 
                                            />
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-home"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">State</label>
                                        <div class="control has-icons-left">
                                            <input 
                                                name="state"
                                                class="input" 
                                                type="text" 
                                                onChange={this.onChange}
                                                value={state}
                                                placeholder="State" 
                                            />
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-home"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">Zipcode</label>
                                        <div class="control has-icons-left">
                                            <input 
                                                name="zipcode"
                                                class="input" 
                                                type="text" 
                                                onChange={this.onChange}
                                                value={zipcode}
                                                placeholder="Zipcode" 
                                            />
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
                        <div class="tile is-4 is-parent">
                            <div class="tile is-child box">
                                <p class="boxtitle">Social</p>
                                <form>
                                    <div class="field">
                                        <label class="label">imdb</label>
                                        <div class="control has-icons-left">
                                            <input
                                                name="imdb" 
                                                class="input" 
                                                type="text" 
                                                onChange={this.onChange}
                                                value={imdb}
                                                placeholder="imdb" 
                                            />
                                            <span class="icon is-small is-left">
                                                <i class="fab fa-imdb"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">Facebook</label>
                                        <div class="control has-icons-left">
                                            <input
                                                name="facebook" 
                                                class="input" 
                                                type="text"
                                                onChange={this.onChange}
                                                value={facebook} 
                                                placeholder="Facebook" 
                                            />
                                            <span class="icon is-small is-left">
                                                <i class="fab fa-facebook"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">Twitter</label>
                                        <div class="control has-icons-left">
                                            <input 
                                                name="twitter"
                                                class="input" 
                                                type="text"
                                                onChange={this.onChange}
                                                value={twitter} 
                                                placeholder="Twitter" 
                                            />
                                            <span class="icon is-small is-left">
                                                <i class="fab fa-twitter"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">Foursquare</label>
                                        <div class="control has-icons-left">
                                            <input 
                                                name="foursquare"
                                                class="input" 
                                                type="text"
                                                onChange={this.onChange}
                                                value={foursquare} 
                                                placeholder="Foursquare" 
                                            />
                                            <span class="icon is-small is-left">
                                                <i class="fab fa-foursquare"></i>
                                            </span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="tile is-4 is-parent">
                            <div class="tile is-child box">
                                <p class="boxtitle">Social</p>
                                <form>
                                    <div class="field">
                                        <label class="label">Medium</label>
                                        <div class="control has-icons-left">
                                            <input class="input" type="text" placeholder="imdb" />
                                            <span class="icon is-small is-left">
                                                <i class="fab fa-medium"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">Youtube</label>
                                        <div class="control has-icons-left">
                                            <input class="input" type="text" placeholder="Youtube" />
                                            <span class="icon is-small is-left">
                                                <i class="fab fa-youtube"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">Yelp</label>
                                        <div class="control has-icons-left">
                                            <input class="input" type="text" placeholder="Yelp" />
                                            <span class="icon is-small is-left">
                                                <i class="fab fa-yelp"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">Twitch</label>
                                        <div class="control has-icons-left">
                                            <input class="input" type="text" placeholder="Twitch" />
                                            <span class="icon is-small is-left">
                                                <i class="fab fa-twitch"></i>
                                            </span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="tile is-4 is-parent">
                            <div class="tile is-child box">
                                <p class="boxtitle">Social</p>
                                <form>
                                    <div class="field">
                                        <label class="label">Instagram</label>
                                        <div class="control has-icons-left">
                                            <input class="input" type="text" placeholder="instagram" />
                                            <span class="icon is-small is-left">
                                                <i class="fab fa-instagram"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">Tumblr</label>
                                        <div class="control has-icons-left">
                                            <input class="input" type="text" placeholder="tumblr" />
                                            <span class="icon is-small is-left">
                                                <i class="fab fa-tumblr"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">Stumbleupon</label>
                                        <div class="control has-icons-left">
                                            <input class="input" type="text" placeholder="Stumbleupon" />
                                            <span class="icon is-small is-left">
                                                <i class="fab fa-stumbleupon"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">SnapChat</label>
                                        <div class="control has-icons-left">
                                            <input class="input" type="text" placeholder="snapchat" />
                                            <span class="icon is-small is-left">
                                                <i class="fab fa-snapchat"></i>
                                            </span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="tile is-parent">
                        <div class="tile is-child box">
                            <p class="boxtitle">Bio</p>
                                
                        </div>
                    </div>
                </div>
            </section>
            </div>
            );
        }
    };      


export default withRouter(Profile);
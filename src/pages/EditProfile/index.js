import React, {Component} from 'react';
import TopNav from '../../common/TopNav';
import firebase from '../../helper/Firebase';
import { toast } from 'bulma-toast';
import { withRouter } from 'react-router-dom';

class EditProfile extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            imdb: '', 
            twitter: '',
            facebook: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
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

    // Add Social Sites to Firebase
    onSubmit = event => {

        event.preventDefault();
        const uid = firebase.auth().currentUser.uid;
        const email = firebase.auth().currentUser.email;
        const user = firebase.database().ref(`users/${uid}`);

        const userprofile = {
            imdb: this.state.imdb,
            twitter: this.state.twitter,
            facebook: this.state.facebook
        }
        user.update(userprofile);
        this.setState({
            imdb: '',
            twitter: '',
            facebook: ''
        });
    };

    onChange = event => {
        this.setState({[event.target.name] : event.target.value });
    };

    render() {
        return (
            <section class="hero is-info is-fullheight">
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <div class="column is-4 is-offset-4">	
                            <h3 class="title">Edit Profile</h3>
                            <p class="subtitle">Edit Profile</p>
                            <div class="box">	
                                <form>
                                    <p class="help is-danger"></p>                                
                                    <div class="field">	
                                        <div class="control">	
                                            <input name="username" type="text" class="input" placeholder="Username" />
                                        </div>
                                    </div>
                                    <div class="field">	
                                        <div class="control">	
                                            <input 
                                                name="imdb"  
                                                type="text" 
                                                onChange={this.onChange}
                                                value={this.state.imdb} 
                                                class="input" 
                                                placeholder="Imdb" />
                                        </div>
                                    </div>
                                    <div class="field">	
                                        <div class="control">	
                                            <input 
                                                name="facebook" 
                                                type="text" 
                                                onChange={this.onChange}
                                                value={this.state.facebook}
                                                class="input" 
                                                placeholder="Facebook" 
                                            />
                                        </div>
                                    </div>
                                    <div class="field">	
                                        <div class="control">	
                                            <input 
                                                name="twitter" 
                                                type="text"
                                                onChange={this.onChange}
                                                value={this.state.twitter} 
                                                class="input" 
                                                placeholder="Twitter" 
                                            />
                                        </div>
                                    </div>
                                    <input name="saveProfile" type="submit" onClick={this.onSubmit} class="button is-medium is-info is-fullwidth" value="Save Profile" /> 
                                </form>
                            </div>
                        </div>
                    </div>
                </div>     
            </section>        
        )
    }      
}

export default withRouter(EditProfile);
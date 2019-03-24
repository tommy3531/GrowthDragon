import React, {Component} from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { toast } from 'bulma-toast';
import fire from '../../helper/Firebase';

class Member extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
    }

    componentWillMount() {
        if(this.props.mainIsLoggedIn){
            console.log("Members is true");
        } else {
            console.log("Member is not logged in redirect to");
            toast({
                message: "You must be logged In",
                type: "is-danger",
                dismissible: true,
                animate: {in: "fadeIn", out: "fadeOut"}
            })
            this.props.history.replace('/');
        }
    }

    // TODO: need to clean up code 
    componentDidMount() {
        const uid = fire.auth().currentUser.uid;
        const user = fire.database().ref('users/' + uid );
        user.on('value', function(snapshot){
            const username = snapshot.val().username;
            this.setState({ username: username});
            console.log("Username: " + username);
        }.bind(this));
    }

    render() {
        return (
            <div>
                <h1>Logged In</h1>
                <h1>{this.state.username}</h1>
            </div>   
        );
    }      
}

export default withRouter(Member);

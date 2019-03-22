import React, {Component} from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { toast } from 'bulma-toast';


class Member extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            count: false
        };
    }
    componentWillReceiveProps(){
        

    }

    componentWillMount() {
        if(this.props.mainIsLoggedIn){
            console.log("Members is true");
        } else {
            console.log("Member is not logged in redirect to");
            this.props.history.replace('/');
        }

    }

    render() {
        return (
            <div>
            { this.props.mainIsLoggedIn ? (
            <div>
                <h1>Logged In</h1>
            </div>
            
            ) : (
                <div>
                    <h1>Not logged In</h1>
                </div>
            )}
            </div>

        );
    }      
}



export default withRouter(Member);
// export default Member;
import React, {Component} from 'react';
import { withRouter } from 'use-react-router';

// import { withRouter } from 'react-router-dom';
import { toast } from 'bulma-toast';


class Member extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
    }
    componentWillReceiveProps(){
        

    }

    componentDidMount() {
        // console.log("Member component: " + this.props.mainIsLoggedIn);

    }

    render() {
        this.state.isLoggedIn = this.props.mainIsLoggedIn;
        console.log("Member render: " + this.state.isLoggedIn);
        return (
            <div>
            { this.state.isLoggedIn ? (
            toast({
                message: "You have logged In",
                type: "is-success",
                dismissible: true,
                animate: {in: "fadeIn", out: "fadeOut"}
            })
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
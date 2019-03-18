import React, {Component} from 'react';
import fire from '../../helper/Firebase';
import TopNav from '../../common/TopNav';
import { Link, withRouter } from 'react-router-dom';
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

            // <div>
                
            //     <h1>Member:{this.state.isLoggedIn}</h1>


            // </div>
        );
    }      
}



export default withRouter(Member);
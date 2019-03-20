import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
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

    componentDidMount() {
        // console.log("Member component: " + this.props.mainIsLoggedIn);

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
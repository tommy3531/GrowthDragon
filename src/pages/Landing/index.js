import React, {Component} from 'react';
import TopNav from "../../common/TopNav";


class Landing extends Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: false,
            username: ''
        };
    }
    
    render() {
        return (
            <div>
                <TopNav mainIsLoggedIn={this.state.loggedIn} />
                    <section class="hero is-info is-fullheight">

                        <div class="hero-body">
                            <div class="container has-text-centered">
                            <p class="title">
                                Growth Dragon
                            </p>
                            <p class="subtitle">
                                Something!!!!!!
                            </p>
                            </div>
                        </div>

                        <div class="hero-foot">
                        </div>
                    </section>
            </div>
        )
    }      
}

export default Landing;
import React from "react";
import { Link } from 'react-router-dom';

const BottomNav = props => {
  const title = props.title;
  return (
    <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
            <div class="container">
                <ul>
                    <li class="is-active">
                        {/* <Link to="/">Home</Link> */}
                    </li>
                    <li>
                        {/* <Link to="/About">About</Link> */}
                    </li>
                    <li>
                        {/* <Link to="/ContactUs">Contact Us</Link> */}
                    </li>
                </ul>
            </div>
        </nav>
    </div>
        
  );
};

export default BottomNav;

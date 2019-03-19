import React from 'react';
import { Link } from 'react-router-dom';
import fire from '../../helper/Firebase'
import { toast } from 'bulma-toast';


const LogOutUser = () => {
    fire.auth().signOut();
    return(
        toast({
            message: "You have logged Out",
            type: "is-success",
            dismissible: true,
            animate: {in: "fadeIn", out: "fadeOut"}
        })

    )
};

const LogOut = () => {
    return (<button  class="button is-info" onClick={LogOutUser}>
            <Link to="/" >Logout</Link>
          </button>
    )


}

export default LogOut;
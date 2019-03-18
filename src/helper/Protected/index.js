import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import fire from "../Firebase/firebase";

const ProtectedRoute = ({ component: Component, user, ...rest }) => {
    return (
        <Route 
            { ...rest}
            render={props => {
                console.log("Protected: " + user)
                if (user) {
                    return <Component {...props} />;
                } else {
                    return <Redirect to="/SignIn" />
                }
            }}
        />
    );
};

export default ProtectedRoute;
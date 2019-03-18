import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";


const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <Route {...rest} render={props => (
            <Layout>
                <Component {...props} />
            </Layout>
    )} />
)

export default AppRoute;
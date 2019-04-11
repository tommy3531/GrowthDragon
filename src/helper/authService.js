import React, { Component } from 'react';

class AuthService {
    constructor(){
        this.login = this.login.bind(this)
    }

    login(email, password) {
        return fetch("http://localhost:8080/user/postLogin",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email, password
            })
        })
        .then(response => response.json())
        .then(data => {
            const json = JSON.stringify(data);
            const jsonParse = JSON.parse(json);
            console.log(jsonParse);
            if(jsonParse.success){
                this.setToken(jsonParse.token);
                return Promise.resolve(jsonParse.token);
            } else {
                console.log("NO SUCCESS");
            }
            
        })
        .catch(err => {
            console.log("Error: " + JSON.stringify(err));
        })
    }

    setToken(token){
        console.log("SUCCESSS: " + token);
        localStorage.setItem("JWT", token);
    }
}

export default AuthService;
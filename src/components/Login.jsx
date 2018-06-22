import React from 'react';
import './App.css';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: ""
        };
    }

    render() {
        return (
            <form>
                <div className="flex-container">
                    <div><input className= "flex-item" type="text" required placeholder="User Name"/></div>
                    <div><input className= "flex-item" type="password" required placeholder="Password"/></div>
                    <div><input className= "flex-item" type="submit" value="Login"/></div>
                </div>
            </form>
        );
    }
}
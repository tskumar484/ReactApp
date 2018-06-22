import React from 'react';
import './App.css';
import Login from './Login.jsx';
export default class App extends React.Component {
    constructor(props) {
        console.log('I am in constructor!');
        super(props);
        this.state = {
            data: 'Hi Susmitha!'
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("I am in getDerivedStateFromProps!");
        if (nextProps.name === prevState.data) {
            return null;
        }
        else return null;
    }

    getData() {
        setTimeout(() => {
            console.log('I am in getData method!');
            this.setState({
                data: 'Hello Santhosh!'
            })
        }, 2000)
    }

    componentDidMount() {
        console.log('I am in componentDidMount!');
        this.getData();
    }

    render() {
        console.log('I am in render!');
        return (
            <Login/>
        )
    }
}
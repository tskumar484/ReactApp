import React from 'react';
import './App.css';

export default class App extends React.Component {

    constructor(props) {
        console.log('I am in constructor!');
        super(props);
        this.state = {
            data: 'Hi Santhosh!'
        }
    }

    componentWillMount() {
        console.log('I am in componentWillMount!');
    }

    getData() {
        setTimeout(() => {
            console.log('I am in getData method!');
            this.setState({
                data: 'Hello Susmitha'
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
            <div className="container">
                <h1>{this.props.name}:</h1>
                <h2>{this.state.data}</h2>
            </div>
        )
    }
}
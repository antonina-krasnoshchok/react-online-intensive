// Core
import React, { Component } from 'react';

//components
import {withProfile} from "components/HOC/withProfile";

//instruments
import Styles from './styles.m.css';

@withProfile
export default class Login extends Component {
    state = {
        username: this.props.username,
        password: this.props.password,
        error: '',
    };

    dismissError = () => {
        this.setState({ error: '' });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const enteredUsername = this.state.username;
        const enteredPassword = this.state.password;
        if (!enteredUsername) {
            return this.setState({ error: 'Username is required' });
        }

        if (!enteredPassword) {
            return this.setState({ error: 'Password is required' });
        }

        const username = this.props.username;
        const password = this.props.password;
        if (username === enteredUsername && password === enteredPassword) {
            const {_logIn, history} = this.props;
            _logIn(history);
            return this.setState({ error: '' });
        } else {
            return this.setState({ error: 'Username or Password are incorrect' });
        }
    };

    handleUserChange = (event) => {
        const enteredUsername = event.target.value;
        this.setState({
            username:enteredUsername,
        });
    };

    handlePassChange = (event) => {
        const enteredPassword = event.target.value;
        this.setState({
            password: enteredPassword,
        });
    };

    render() {
        const username = this.state.username;
        const password = this.state.password;

        return (
            <div className = {Styles.login}>
                <form onSubmit = {this.handleSubmit}>
                    <input type = 'text' value = {username} onChange = {this.handleUserChange} />
                    <input type = 'password' value = {password} onChange = {this.handlePassChange} />

                    <input type = 'submit' value = 'Log In'/>
                    {
                        this.state.error &&
                        <h3 onClick = {this.dismissError}>
                            <button onClick = {this.dismissError}>✖</button>
                            {this.state.error}
                        </h3>
                    }
                </form>
            </div>
        );
    };
};
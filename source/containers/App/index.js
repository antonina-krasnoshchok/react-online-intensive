// Core
import React, { Component } from 'react';
import {Switch, Route, Redirect, browserHistory, withRouter} from 'react-router-dom';

//components
import Catcher from 'components/Catcher';
import Feed from 'components/Feed';
import {Provider} from 'components/HOC/withProfile';
import Profile from 'components/Profile';
import StatusBar from 'components/StatusBar';
import Login from 'components/Login';

//instruments
import avatar from 'theme/assets/lisa';

const options = {
    avatar,
    currentUserFirstName: 'Антонина',
    currentUserLastName: 'Краснощёк',
    username: 'tonya',
    password: '123456'
};


const PrivateRoute = ({ component: Component, isLogged, ...rest }) => (
    <Route {...rest} render = {(props) => (
        isLogged
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
);


export default class App extends Component {
    state = {
        isLogged: false
    };

    _logIn = (history) => {
        this.setState({
            isLogged: true
        },() => {
            localStorage.setItem('isLogged', 'true');
            history.push('/');
        });
    };

    _logOut = (history) => {
        this.setState({
            isLogged: false
        },() => {
            localStorage.removeItem('isLogged');
            history.push('/login');
        });
    };

    render () {
        const {isLogged} = this.state;
        const _logIn = this._logIn;
        const _logOut = this._logOut;
        const fullOptions = {isLogged, _logIn:_logIn, _logOut:_logOut, ...options};

        return (
            <Catcher>
                <Provider value = {fullOptions}>
                    <StatusBar />
                    <Switch>
                        <PrivateRoute component = {Feed} path = '/feed' isLogged = {isLogged} />
                        <PrivateRoute component = {Profile} path = '/profile' isLogged = {isLogged} />
                        <Route component = {Login} path = '/login' />
                        <Redirect from = '/' to =  '/feed'/>
                    </Switch>
                </Provider>
            </Catcher>
        );
    }
}

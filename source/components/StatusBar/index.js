import React, {Component} from 'react';
import cx from 'classnames';
import {Transition} from 'react-transition-group';
import {fromTo} from 'gsap';

//components
import {withProfile} from 'components/HOC/withProfile';
import { Link, withRouter } from 'react-router-dom';

//instruments
import Styles from './styles.m.css';
import {socket} from 'socket/init';

@withProfile
export default class StatusBar extends Component {
    state={
        online: false
    }

    componentDidMount(){
        socket.on('connect',() => {
            this.setState({
                online: true
            });
        });

        socket.on('disconnect',() => {
            this.setState({
                online: false
            });
        });
    }

    componentWillUnmount(){
        socket.removeListener('connect');
        socket.removeListener('disconnect');
    }

    _animationStatusBarEnter = (statusBar) => {
        fromTo(statusBar, 1, {opacity:0}, {opacity:1});
    }

    _logOut = (history) =>{
        const {_logOut} = this.props;
        _logOut(history);
    }

    render(){
        const {avatar, currentUserFirstName, isLogged} = this.props;
        const {online} = this.state;
        const statusStyle = cx(Styles.status,{
            [Styles.online]:online,
            [Styles.offline]:!online
        });
        const statusMessage = online? 'Online':'Offline';

        const Logout = withRouter(
            ({ history }) =>
                isLogged ? (
                    <button  onClick = {() => {this._logOut(history);}}>
                        <span>Log Out</span>
                    </button>
                )
                : null
        );

        const avatarJSX = isLogged
            ? (
                <Link to = '/profile'>
                    <img src = {avatar} />
                    <span>{currentUserFirstName}</span>
                </Link>
            )
            :null;

        const profileJSX = isLogged
            ? (
                <Link to = '/feed'>Feed</Link>
            )
            : null;

        return (
            <Transition
                in
                appear
                timeout = {1000}
                onEnter = {this._animationStatusBarEnter}>
                <section className = {Styles.statusBar}>
                    <div className = {statusStyle}>
                        <div>{statusMessage}</div>
                        <span />
                    </div>
                    {avatarJSX}
                    {profileJSX}
                    <Logout />

                </section>
            </Transition>
        );
    }
}

// Core
import React, { Component } from 'react';

//components
import StatusBar from 'components/StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';

//instruments
import Styles from './styles.m.css';

export default class Feed extends Component {
    render () {
        const {avatar, currentUserFirstName} = this.props;
        return (
            <section className={Styles.feed}>
                <StatusBar {...this.props}/>
                <Composer
                    avatar = {avatar}
                    currentUserFirstName = {currentUserFirstName}
                />
                <Post {...this.props}/>
            </section>
        );
    }
}

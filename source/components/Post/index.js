// Core
import React, { Component } from 'react';

//instruments
import moment from 'moment'
import Styles from './styles.m.css';

export default class Post extends Component {
    render () {
        const {avatar, currentUserFirstName, currentUserLastName} = this.props;
        return (
            <section className={Styles.post}>
                <img src={avatar} />
                <a>{`${currentUserFirstName} ${currentUserLastName}`}</a>
                <time>{moment().format('MMMM d h:mm:ss')}</time>
                <p>Hello!</p>
            </section>
        );
    }
}

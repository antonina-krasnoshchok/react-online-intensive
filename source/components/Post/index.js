// Core
import React, { Component } from 'react';

//instruments
import avatar from 'theme/assets/lisa';
import moment from 'moment'
import Styles from './styles.m.css';

export default class Post extends Component {
    render () {
        return (
            <section className={Styles.post}>
                <img src={avatar} />
                <a>Lisa Simpson</a>
                <time>{moment().format('MMMM d h:mm:ss')}</time>
                <p>Hello!</p>
            </section>
        );
    }
}

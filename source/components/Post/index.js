// Core
import React, { Component } from 'react';

//components
import {Consumer} from 'components/HOC/withProfile';

//instruments
import moment from 'moment'
import Styles from './styles.m.css';

export default class Post extends Component {
    render () {
        return (
            <Consumer>
                {(context) => (
                    <section className={Styles.post}>
                        <img src={context.avatar} />
                        <a>{`${context.currentUserFirstName} ${context.currentUserLastName}`}</a>
                        <time>{moment().format('MMMM d h:mm:ss')}</time>
                        <p>Hello!</p>
                    </section>
                )}
            </Consumer>
        );
    }
}

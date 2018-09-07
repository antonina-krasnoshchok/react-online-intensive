// Core
import React, { Component } from 'react';

//components
import {withProfile} from "components/HOC/withProfile";

//instruments
import Styles from './styles.m.css';


@withProfile
export default class Feed extends Component {
    render () {
        const { currentUserFirstName, currentUserLastName, avatar } = this.props;

        return (
            <section className = {Styles.profile}>
                <h1>Welcome, {currentUserFirstName} {currentUserLastName}</h1>
                <img src = {avatar} />
            </section>
        );
    };
};

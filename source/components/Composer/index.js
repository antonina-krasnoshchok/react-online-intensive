// Core
import React, { Component } from 'react';

//instruments
import Styles from './styles.m.css';

export default class Composer extends Component {
    render () {
        const {avatar, currentUserFirstName} = this.props;
        return (
            <section className={Styles.composer}>
                <img src={avatar} />
                <form>
                    <textarea placeholder={`What is on your mind, ${currentUserFirstName}?`}></textarea>
                    <input type='submit' value='Post' />
                </form>
            </section>
        );
    }
}

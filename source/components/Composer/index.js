// Core
import React, { Component } from 'react';

//components
import {Consumer} from 'components/HOC/withProfile';

//instruments
import Styles from './styles.m.css';

export default class Composer extends Component {
    render () {
        return (
            <Consumer>
                {(context) => (
                    <section className={Styles.composer}>
                        <img src={context.avatar} />
                        <form>
                            <textarea placeholder={`What is on your mind, ${context.currentUserFirstName}?`}></textarea>
                            <input type='submit' value='Post' />
                        </form>
                    </section>
                )}
            </Consumer>
        );
    }
}

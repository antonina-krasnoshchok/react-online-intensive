//core
import React, { Component } from 'react';

//instruments
import {object} from 'prop-types';
import Styles from './styles.m.css';

export default class Catcher extends Component{
    static propTypes = {
        children: object.isRequired
    };

    state = {
        error: false
    };

    componentDidCatch(error,stack){
        console.log('ERROR',error);
        console.log('STACKTRACE:', stack.componentStack);
        this.setState({
            error:true
        });
    };

    render () {
        if (this.state.error) {
            return (
                <section className={Styles.catcher}>
                    <span>An error occured</span>
                    <p>
                        Our enginners fixing this already
                    </p>
                </section>
            );
        }
        return this.props.children;
    };
};
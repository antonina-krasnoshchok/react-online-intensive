// Core
import React, { Component } from 'react';

//instruments
import avatar from 'theme/assets/lisa';

export default class Composer extends Component {
    render () {
        return (
            <section>
                <img src={avatar} />
                <form>
                    <textarea placeholder={`What is on your mind?`}></textarea>
                    <input type='submit' value='Post' />
                </form>
            </section>
        );
    }
}

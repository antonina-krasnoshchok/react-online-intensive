// Core
import React, { Component } from 'react';
import {hot} from 'react-hot-loader';

//components
import Feed from 'components/Feed';

//instruments
import avatar from 'theme/assets/lisa';

const options = {
    avatar,
    currentUserFirstName: 'Lisa',
    currentUserLastName: 'Simpson'
};

@hot(module)
export default class App extends Component {
    render () {
        return (
            <section>
                <Feed {...options}/>
            </section>
        );
    }
}

// Core
import React, { Component } from 'react';

//components
import Catcher from 'components/Catcher';
import Feed from 'components/Feed';
import {Provider} from 'components/HOC/withProfile';

//instruments
import avatar from 'theme/assets/lisa';

const options = {
    avatar,
    currentUserFirstName: 'Антонина',
    currentUserLastName: 'Краснощёк'
};

export default class App extends Component {
    render () {
        return (
            <Catcher>
                <Provider value={options}>
                    <Feed/>
                </Provider>
            </Catcher>
        );
    }
}

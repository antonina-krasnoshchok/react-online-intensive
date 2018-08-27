//core
import React from 'react';

//components
import {withProfile} from 'components/HOC/withProfile';

//instruments
import Styles from './styles.m.css';

const Postman = (props) => {

    return (
        <section className = {Styles.postman}>
            <img src = {props.avatar} />
            <span>Welcome online, {props.currentUserFirstName}</span>
        </section>
    )
}

export default withProfile(Postman);

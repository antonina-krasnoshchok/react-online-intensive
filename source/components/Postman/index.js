//core
import React from 'react';
import {Transition} from 'react-transition-group';
import {fromTo, delay} from 'gsap';

//components
import {withProfile} from 'components/HOC/withProfile';

//instruments
import Styles from './styles.m.css';

const Postman = (props) => {

    const _animatePostmanEnter = (postman) => {
        fromTo(postman, 1, {right:-250}, {right:30});
    }

    const _animatePostmanEntered = (postman) =>{
        fromTo(postman, 1, {right:30}, {right:-250});
    }

    return (
        <Transition
            in
            appear
            timeout = {5000}
            onEnter = {_animatePostmanEnter}
            onEntered = {_animatePostmanEntered}>
            <section className = {Styles.postman}>
                <img src = {props.avatar} />
                <span>Welcome online, {props.currentUserFirstName}</span>
            </section>
        </Transition>
    )
}

export default withProfile(Postman);

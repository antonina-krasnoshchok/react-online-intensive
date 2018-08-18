// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//components
import {withProfile} from 'components/HOC/withProfile';

//instruments
import Styles from './styles.m.css';

@withProfile
export default class Composer extends Component {
    static propTypes = {
        _createPost: PropTypes.func.isRequired
    }

    state = {
        comment:''
    }

    _updateComment = (event) => {
        const updatedComment = event.target.value;
        this.setState({
            comment: updatedComment
        })
    }

    _handleFormSubmit = (event) => {
        event.preventDefault();
        this._submitComment(event);
    }

    _submitComment = (event) => {
        event.preventDefault();
        const {comment} = this.state;
        if (!comment){
            return null;
        }
        this.props._createPost(comment);
        this.setState({
            comment:''
        })
    }

    _submitOnEnter = (event) => {
        const enterKey = event.key ==='Enter';
        if (enterKey){
            event.preventDefault();
            this._submitComment(event);
        }
    }

    render () {
        const {comment} = this.state;
        const {avatar, currentUserFirstName} = this.props;
        return (
                <section className = {Styles.composer}>
                    <img src = {avatar} />
                    <form onSubmit = {this._handleFormSubmit}>
                        <textarea
                            placeholder = {`What is on your mind, ${currentUserFirstName}?`}
                            value = {comment}
                            onChange = {this._updateComment}
                            onKeyPress = {this._submitOnEnter}
                        >
                        </textarea>
                        <input type='submit' value='Post' />
                    </form>
                </section>
        );
    }
}
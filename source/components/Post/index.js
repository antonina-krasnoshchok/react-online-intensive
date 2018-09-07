// Core
import React, { Component } from 'react';

//components
import {withProfile} from 'components/HOC/withProfile';
import {func, string, number, array} from 'prop-types';
import Like from 'components/Like';

//instruments
import moment from 'moment';
import Styles from './styles.m.css';

@withProfile
export default class Post extends Component {
    static propTypes = {
        comment:string.isRequired,
        created:number.isRequired,
        _likePost: func.isRequired,
        id: string.isRequired,
        likes: array.isRequired
    };

    _removePost = () => {
        const {_removePost,id} = this.props;
        _removePost(id);
    };

    _getCross = () => {
        const {currentUserFirstName,currentUserLastName,firstName,lastName} = this.props;
        return `${firstName} ${lastName}`===`${currentUserFirstName} ${currentUserLastName}`
            ? <span className = {Styles.cross} onClick = {this._removePost}></span>
            : null;
    };

    render () {
        const {avatar, firstName, lastName, comment, created, _likePost, id, likes} = this.props;
        const cross = this._getCross();
        return (
            <section className = {Styles.post}>
                {cross}
                <img src = {avatar} />
                <a>{`${firstName} ${lastName}`}</a>
                <time>{moment.unix(created).format('MMMM D h:mm:ss')}</time>
                <p>{comment}</p>
                <Like _likePost = {_likePost} id = {id} likes = {likes}/>
            </section>
        );
    };
};

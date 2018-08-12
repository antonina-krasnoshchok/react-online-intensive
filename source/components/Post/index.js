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
    }

    _removePost=()=>{
        const {_removePost,id} = this.props;
        _removePost(id);
    }

    render () {
        const {avatar, currentUserFirstName, currentUserLastName, comment, created, _likePost, id, likes} = this.props;
        return (
            <section className={Styles.post}>
                <span className={Styles.cross} onClick={this._removePost}></span>
                <img src={avatar} />
                <a>{`${currentUserFirstName} ${currentUserLastName}`}</a>
                <time>{moment.unix(created).format('MMMM D h:mm:ss')}</time>
                <p>{comment}</p>
                <Like _likePost={_likePost} id={id} likes={likes}/>
            </section>
        );
    }
}

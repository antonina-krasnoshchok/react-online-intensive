// Core
import React, { Component } from 'react';

//components
import {Consumer} from 'components/HOC/withProfile';
import {func, string, number, array} from 'prop-types';
import Like from 'components/Like';

//instruments
import moment from 'moment';
import Styles from './styles.m.css';

export default class Post extends Component {
    static propTypes = {
        comment:string.isRequired,
        created:number.isRequired,
        _likePost: func.isRequired,
        id: string.isRequired,
        likes: array.isRequired
    }

    constructor(){
        super();
        this._removePost = this._removePost.bind(this);
    }

    _removePost(){
        const {_removePost,id} = this.props;
        _removePost(id);
    }

    render () {
        const {comment, created, _likePost, id, likes} = this.props;
        return (
            <Consumer>
                {(context) => (
                    <section className={Styles.post}>
                        <span className={Styles.cross} onClick={this._removePost}></span>
                        <img src={context.avatar} />
                        <a>{`${context.currentUserFirstName} ${context.currentUserLastName}`}</a>
                        <time>{moment.unix(created).format('MMMM D h:mm:ss')}</time>
                        <p>{comment}</p>
                        <Like _likePost={_likePost} id={id} likes={likes}{...context} />
                    </section>
                )}
            </Consumer>
        );
    }
}

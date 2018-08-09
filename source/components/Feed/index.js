// Core
import React, { Component } from 'react';
import moment from 'moment';

//components
import StatusBar from 'components/StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';
import Spinner from 'components/Spinner';

//instruments
import Styles from './styles.m.css';
import {delay, getUniqueID} from 'instruments';

export default class Feed extends Component {
    state = {
        posts:[{id:'1', comment:'Hello!', created:1533387762, likes:[]},
               {id:'2',comment:'Hi! I\'m Lisa', created:1533387778, likes:[]}],
        isPostsFetching: false
    };

    constructor(){
        super();
        this._createPost = this._createPost.bind(this);
        this._likePost = this._likePost.bind(this);
        this._setPostFetchingState = this._setPostFetchingState.bind(this);
        this._removePost = this._removePost.bind(this);
    }

    _setPostFetchingState(state){
        this.setState({
            isPostsFetching: state
        })
    }
    async _createPost(comment){
        this._setPostFetchingState(true);
        const post = {
            id: getUniqueID(),
            created: moment.now(),
            comment: comment,
            likes:[]
        }
        await delay(1200);
        this.setState(({posts})=>({
            posts:[post,...posts],
            isPostsFetching: false
        }));
    }

    async _likePost(id){
        const {currentUserFirstName,currentUserLastName} = this.props;
        this._setPostFetchingState(true);
        await delay(1200);
        const newPosts = this.state.posts.map((post)=>{
            if(post.id===id){
                return{
                    ...post,
                    likes:[
                        {
                            id:getUniqueID(),
                            firstName: currentUserFirstName,
                            lastName:currentUserLastName
                        }
                    ]
                }
            }
            return post;
        });

        this.setState({
            posts: newPosts,
            isPostsFetching:false
        });
    }

    async _removePost(id){
        this._setPostFetchingState(true);
        await delay(1200);
        const newPosts = this.state.posts.filter((post)=>{
            if(post.id!=id){
                return{...post}
            }
        });
        this.setState({
            posts: newPosts,
            isPostsFetching:false
        });
    }

    render () {
        const { posts, isPostsFetching } = this.state;
        const postsJSX = posts.map((post)=>{
            return <Post key={post.id} {...post} _likePost={this._likePost} _removePost={this._removePost} />
        });

        return (
            <section className={Styles.feed}>
                <Spinner isSpinning={isPostsFetching} />
                <StatusBar />
                <Composer _createPost={this._createPost}/>
                {postsJSX}
            </section>
        );
    }
}

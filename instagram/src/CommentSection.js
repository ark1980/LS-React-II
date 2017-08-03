import React, { Component } from 'react';
import PostContainer from './PostContainer';
import Post from './index.css';

const CommentSection = (props) => {
    return (    
        <div className='textAllignment'>
            <strong>{props.comments.username} </strong>
            {props.comments.text}

        </div>
    )
}

export default CommentSection;
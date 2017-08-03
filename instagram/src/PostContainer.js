import React from 'react';
import CommentSection from './CommentSection';
import Post from './index.css';


const PostContainer = (props) => {

    return(
        <div className='box'>
            <div className='textAllignment'>
                <img className='logo' src={props.data.thumbnailUrl} alt="thumbnail"/>
                <strong>{props.data.username}</strong>
            </div>
            <div className='post'>
                <img className='postPic' src={props.data.imageUrl} alt="image"/>
                <p className='textAllignment'><strong>{props.data.likes} Likes</strong></p>
                <p className='textAllignment' >{props.data.timestamp}</p>
                {props.data.comments.map((comment, i) => 
                    <CommentSection key={i} comments={comment} />
                )}
            </div>
        </div>
    )
    
}

export default PostContainer;
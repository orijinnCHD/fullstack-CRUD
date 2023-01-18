import React, { useEffect, useState } from 'react';
import axios from 'axios';
const LikePost = ({post,userId}) => {

    const[userLiked,setUserLiked] = useState(false);

    useEffect(()=>{
        // si le post est liké
        if(post.likers)
            // on verifie si le post liké est celle de l'utilisateur
            if(post.likers.includes(userId))
                setUserLiked(true);
            else
                setUserLiked(false);
            // e useEffect est joué à chaque  utilisateur qui like
    },[userId])

    const likePost =()=>{
        axios.patch(`http://localhost:5000/post/like-post/${post._id}`,{userId});
        setUserLiked(true);
    }

    const dislikePost =()=>{
        axios.patch(`http://localhost:5000/post/dislike-post/${post._id}`,{userId});
        setUserLiked(false);
    }

    return (
        <div className="like-icon">
            <p>{post.likers?post.likers.length:0}</p>
            {
                userLiked ?
                (
                    <span id="like-btn" onClick={()=>dislikePost()}>&#9829;</span>
                ):
                (
                    <span id="dislike-btn" onClick={()=>likePost()}>&#9829;</span>
                )
            }
            
        </div>
    );
};

export default LikePost;
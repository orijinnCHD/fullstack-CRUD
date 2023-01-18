import axios from 'axios';
import React from 'react';

const DeletePost = ({postId}) => {
    console.log(postId);
    const handleDelete =()=>{
        axios.delete("http://localhost:5000/post/" + postId);
    };

    return (
        <span id="delete-btn" onClick={()=>handleDelete()}>
            &#10010;
        </span>
    );
};

export default DeletePost;
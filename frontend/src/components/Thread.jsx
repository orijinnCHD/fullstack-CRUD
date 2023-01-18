import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../feature/post.slice';
import Post from './Post';

const Thread = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state)=>state.posts.postsData);
    //const[posts,setPosts]=useState([]);

    useEffect(()=>{
        dispatch(getPosts());
    },[])

    return (
        <div className="thread-container">
            {posts && posts
            .slice() // rajoute un slice à vide sinon erreur en utilisant sort tout de suite
            .sort((a,b)=>b.createdAt.localeCompare(a.createdAt))
            .map(post => (
               <Post key={post._id} post={post}/>
                ))}
        </div>
    );
};

export default Thread;
import React, { useState } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { createPost, getPosts } from '../feature/post.slice';
const NewPost = () => {

    const [message,setMessage] = useState("");
    const userId = useSelector((state)=>state.user.userId);
    const dispatch =useDispatch();
    const handleForm = (e)=>{
        e.preventDefault();
        console.log("le formulaire est submit");

        const data ={
            message,
            author:userId,
            // créer un ID provisoire en attendant le retour de la bdd
            id:Date.now(),
        }

        axios.post('http://localhost:5000/post/',data)
        dispatch(createPost(data));
        //GetPosts car il faut aller chercher l'id crée par mongoDB
        // mais le temps de recharger les données avec le getPosts,
        // affichage return na pas le id du post ainsi la key du post est fait avec id db
        // message erreur dans la console pendant un bref instant
        // on a créer un id provisoire dans la data (pour eviter les erreurs de la console)
        dispatch(getPosts());
        setMessage("");
    }

    return (
        <form 
            className='new-post-container' 
            onSubmit={(e)=>handleForm(e)} 
        >
            <textarea 
            onChange={(e)=> setMessage(e.target.value)}
            placeholder="Quoi de neuf ?"
            value={message}
            >
            </textarea>
            <input type="submit" value="Envoyer" />
        </form>
    );
};

export default NewPost;

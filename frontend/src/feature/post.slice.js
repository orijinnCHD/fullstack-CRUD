import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// permet de prendre les donnée de db et en même temps imcremente la variable
// pk ? quand on creer un post id est créer dans mongoDb ducoup la data dans le store n'a pas le nouvelle id
// avec cette methode, on aura une data du store la plus récente possible
export const getPosts = createAsyncThunk("getPosts",async(_,thunkAPI)=>{
    axios
    .get("http://localhost:5000/post/")
    .then((res)=>thunkAPI.dispatch(getPostsSuccess(res.data)));

})


export const postSlice = createSlice({
    name:"posts",
    initialState:{
        postsData:[],
    },
    reducers:{   
        getPostsSuccess:(state,{payload})=>{
            state.postsData= payload;
        },

        createPost:(state,{payload})=>{
            state.postsData.push(payload)
        }

        
    }
});

export const {getPostsSuccess,createPost} = postSlice.actions;
export default postSlice.reducer;
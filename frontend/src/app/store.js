import {configureStore} from "@reduxjs/toolkit";
import postSlice from "../feature/post.slice";
import userReducer from "../feature/user.slice"
export default configureStore({
    reducer:{
        user:userReducer,
        posts:postSlice,
    },
})
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducers-Redux/authSlice";
import usersReducer from "./Reducers-Redux/usersSlice";
import postReducer from "./Reducers-Redux/postsSlice";
const store=configureStore({
    reducer:{
        auth:authReducer,
        users:usersReducer,
        posts:postReducer,
    }
});

export default store;
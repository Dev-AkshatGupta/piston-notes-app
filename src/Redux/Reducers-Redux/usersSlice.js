import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; 
import {notifySuccess,notifyError} from "Utilities/Notifications";





const initialState={
    users:[],
    profile:{},
    currentUser:{},
    followedUser:[]
}



export const getAllUsers= createAsyncThunk("users/getAllUsers",async()=>{
     try {
      const { data } = await axios.get(`/api/users`);
      return data ;
    } catch (error) {
      console.log(error.response.data.errors);
    }
} );



 export const getAUser=createAsyncThunk("users/getAUser",async(userId)=>{
     const {data}=await axios.get(`/api/users/${userId}`)
     return data.user;
 });
export const unFollowUser=createAsyncThunk("users/unFollowUser",async(followUserId)=>{
    const encodedToken=localStorage.getItem("token");
    try {
    const {data}=await axios.post(`/api/users/unfollow/${followUserId}`,{},{headers:{authorization: encodedToken}})
    console.log(data.user);    
    return data;
    } catch (error) {
        console.log(error.response.data.errors)
    }
})
export const followUser=createAsyncThunk("users/followUser",async(followUserId)=>{
    const encodedToken=localStorage.getItem("token");
    try {
    const {data}=await axios.post(`/api/users/follow/${followUserId}`,{},{headers:{authorization: encodedToken}})
    console.log(data.user);    
    return data;
    } catch (error) {
        console.log(error.response.data.errors)
    }
})




const usersSlice=createSlice({
    name:"users",
    initialState,
    extraReducers(builder){
        builder
        .addCase(getAllUsers.fulfilled,(state,action)=>{
            state.users=action.payload.users;
        })
        .addCase(getAUser.fulfilled,(state,action)=>{
            console.log(action.payload);
            state.profile=action.payload;
        })
        .addCase(followUser.fulfilled,(state,action)=>{
            console.log(action.payload);
            state.currentUser=action.payload.user;
        })
        .addCase(unFollowUser.fulfilled,(state,action)=>{
            console.log(action.payload);
            state.currentUser=action.payload?.user;
        });
    }
}) 
export default usersSlice.reducer;
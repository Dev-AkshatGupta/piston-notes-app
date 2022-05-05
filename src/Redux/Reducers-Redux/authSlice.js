import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {notifySuccess,notifyError} from "Utilities/Notifications";

const initialState={
    currentUser:{},
    loading:false
    }

export const login=createAsyncThunk("auth/login",async(userDetails)=>{
try {
    const response=await axios.post(`/api/auth/login`,{
    username:userDetails.username,
    password:userDetails.password,
    });
    return response.data;
} catch (error) {
  console.log(error.response.data.errors[0]);  
}
})
export const signUp=createAsyncThunk("auth/signUp",async(userDetails)=>{
    try {
        const response= await axios.post(`/api/auth/signup`,{
            username:userDetails.username,
            password:userDetails.password,
            name:userDetails.name
        });
        return response.data
    } catch (error) {
console.log(error.response);        
    }
})
export const logOut=createAsyncThunk("auth/logOut",async()=>{
    localStorage.clear();
})
export const checkToken=createAsyncThunk("auth/checkToken",async()=>{
    const encodedToken=localStorage.getItem("token");
    if(encodedToken){
        try{
const response=await axios.get("api/auth/verify",{encodedToken});    
    return response.data}
    catch(error){
console.log(error.response);        
 }}

})
export const editUser=createAsyncThunk("auth/editUser",async(userData)=>{
try {
    const encodedToken=localStorage.getItem("token");
    const {data}=await axios.post(`/api/users/edit`,{userData},{headers:{authorization:encodedToken}}
    );
    
    return data;
} catch (error) {
  console.log(error.response.data.errors[0]);  
}
})
const authSlice=createSlice({
    name:"auth",
    initialState,
    extraReducers(builder){
        builder
        .addCase(login.pending,(state,action)=>{
            state.loading=true;
        })
        .addCase(login.fulfilled,(state,action)=>{
            state.currentUser=action.payload.foundUser;
            state.loading=false;
            localStorage.setItem("token",action.payload.encodedToken);
            notifySuccess("Hey you loge'd in man")        
        })
        .addCase(signUp.fulfilled,(state,action)=>{
            state.currentUser=action.payload.createdUser;
             localStorage.setItem("token",action.payload.encodedToken)
        })
        .addCase(logOut.fulfilled,(state,action)=>{
            notifyError("you logged out");
            state.currentUser={};
        })
        .addCase(checkToken.fulfilled,(state,action)=>{
            if(action.payload){
            state.currentUser=action.payload.user;
            }
        })
        .addCase(editUser.fulfilled,(state,action)=>{
            state.currentUser=action.payload
        })
    },
})
export default authSlice.reducer;
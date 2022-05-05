import axios from "axios";
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";


const initialState={
    posts:[],
    profilePosts:[],
    bookmark:[]
}
export const getAllPosts=createAsyncThunk("posts/getAllPosts",async()=>{
    try{
        const {data}=await axios.get("/api/posts");
        return data.posts;
}    catch(error){
        console.log(error.response.data.errors);
    }
});

export const getProfilePosts=createAsyncThunk("posts/getProfilePosts",async(username)=>{
    try {
        const {data}=await axios.get(`/api/posts/user/${username}`)
        return data.posts; 
    } catch (error) {
        console.log(error.response.data.errors)
    }
});


export const createPost=createAsyncThunk("posts/createPost",async(post)=>{
   
    try {
        const encodedToken=localStorage.getItem("token");
        const {data}=await axios.post("/api/posts/" ,{content:post},{headers:{authorization:encodedToken}
        });
        return data.posts;
    } catch (error) {
        console.log(error)
    }
});

export const editPost=createAsyncThunk("posts/editPost",async(content,postId)=>{
 
    try {
        const encodedToken=localStorage.getItem("token");
        const {data}=await axios.post(`/api/posts/edit/${postId}` ,{content:content},{headers:{authorization:encodedToken}
        });
        console.log(data);
        return data.posts;
    } catch (error) {
        console.log(error)
    }
});
export const deletePost=createAsyncThunk("posts/deletePost",async(content,postId)=>{
 
    try {
        const encodedToken=localStorage.getItem("token");
        const {data}=await axios.delete(`/api/posts/${postId}` ,{},{headers:{authorization:encodedToken}
        });
        console.log(data);
        return data.posts;
    } catch (error) {
        console.log(error)
    }
});
// export const deletePost=createAsyncThunk("posts/deletePost",async(content,postId)=>{
 
//     try {
//         const encodedToken=localStorage.getItem("token");
//         const {data}=await axios.delete(`/api/posts/${postId}` ,{},{headers:{authorization:encodedToken}
//         });
//         console.log(data);
//         return data.posts;
//     } catch (error) {
//         console.log(error)
//     }
// });
export const likePost=createAsyncThunk("posts/likePost",async(postId)=>{
    try {
        const encodedToken=localStorage.getItem("token");
    const {data}=await axios.post(`/api/posts/like/${postId}`,{},{headers:{authorization:encodedToken}});
    return data.posts;
    } catch (error) {
        console.log(error.response.data[0].errors)
    }
});
export const disLikePost=createAsyncThunk("posts/disLikePost",async(postId)=>{
    try {
        const encodedToken=localStorage.getItem("token");
     const {data}=await axios.post(`/api/posts/dislike/${postId}`,{},{headers:{authorization:encodedToken}});
    return data.posts;
    } catch (error) {
        console.log(error.response.data[0].errors)
    }
    
});
export const bookMark=createAsyncThunk("posts/bookMark",async(postId)=>{
  try{  const encodedToken=localStorage.getItem("token");
    const {data}=await axios.post(
         `/api/users/bookmark/${postId}`,
    {},
    {headers:{authorization:encodedToken}});
return data.bookmarks;
}
    catch(error){console.log(error.response.data.errors)}
});
export const deleteBookMark=createAsyncThunk("posts/deleteBookMark",async(postId)=>{
  try{  const encodedToken=localStorage.getItem("token");
    const {data}=await axios.post(`/api/users/remove-bookmark/${postId}`,{},{headers:{authorization:encodedToken}})
return data.bookmarks;
}
    catch(error){console.log(error.response.data.errors)}
});

export const getBookMarks=createAsyncThunk("posts/getBookMarks",async ()=>{
    try{
        const encodedToken=localStorage.getItem("token");
    const {data}=await axios.get(`/api/users/bookmark/`,{},{headers:{authorization:encodedToken}
    });
    console.log(data);
    return data.bookmarks;}
    catch(error){
        console.log(error.response.data.errors);
    }
});

 const postsSlice=createSlice({
    name:"posts",
    initialState,
    extraReducers(builder){
        builder
        .addCase(getAllPosts.fulfilled,(state,action)=>{
            state.posts=action.payload;
        })
        .addCase(getProfilePosts.fulfilled,(state,action)=>{
            state.profilePosts=action.payload;
        })
        .addCase(createPost.fulfilled,(state,action)=>{
            state.posts=action.payload;

        })
        .addCase(likePost.fulfilled,(state,action)=>{
            state.posts=action.payload;
        })
        .addCase(disLikePost.fulfilled,(state,action)=>{
            state.posts=action.payload;
        })
        .addCase(getBookMarks.fulfilled,(state,action)=>{
            state.bookmark=action.payload;
        })
        .addCase(bookMark.fulfilled,(state,action)=>{
            state.bookmark=action.payload;
        })
        .addCase(deleteBookMark.fulfilled,(state,action)=>{
            state.bookmark=action.payload;
        });
    }
});


export default postsSlice.reducer;
import { createContext, useContext, useReducer } from "react";

export const PostList =createContext({
    postList:[],
    addPost:()=>{},
    addInitialPosts:()=>{},
    deletePost:()=>{},
});

const postListReducer=(currPostList,action)=>{
    console.log(action.payload);
    let newPostList=currPostList;
    if(action.type==="DELETE_POST"){
        newPostList=currPostList.filter(post=> post.id !== action.payload.postId);
    }else if(action.type==="ADD_POST"){
        newPostList=[action.payload,...currPostList]
    }else if(action.type==="INITIAL_POSTS"){
        newPostList=action.payload.posts;
    }
    return newPostList;
}

const PostListProvider=({children})=>{
    const [postList,dispatchPostList]=useReducer(postListReducer,[]);

    const addPost=(post)=>{
        console.log("got post");
        dispatchPostList({
            type:"ADD_POST",
            payload:post,
        })
    }

    const deletePost=(postId)=>{
        dispatchPostList({
            type:"DELETE_POST",
            payload:{
                postId,
            }
        })
    }

    const addInitialPosts=(posts)=>{
        dispatchPostList({
            type:"INITIAL_POSTS",
            payload:{
                posts,
            }
        })
    }

    return <PostList.Provider value={{postList,addPost,deletePost,addInitialPosts}}> 
        {children}
    </PostList.Provider>
}

export default PostListProvider;
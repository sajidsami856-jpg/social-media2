import { createContext, useContext, useReducer } from "react";

export const PostList =createContext({
    postList:[],
    addPost:()=>{},
    deletePost:()=>{},
});

// const DEFAULT_POST_LIST=[{
//     id:'1',
//     title:"Going to Dhaka",
//     body:"Hi friends, Im going to Dhaka for my interview",
//     reactions:2,
//     userId:"user-9",
//     tags:["interview","Dhaka","nervous"],
// },{
//     id:'2',
//     title:"Passed HSC",
//     body:"I got passed HSC with a good GPA",
//     reactions:10,
//     userId:"user-12",
//     tags:["Passed","HSC-2027","Result"],
// }]

const postListReducer=(currPostList,action)=>{
    let newPostList=currPostList;
    if(action.type==="DELETE_POST"){
        newPostList=currPostList.filter(post=> post.id !== action.payload.postId);
    }else if(action.type==="ADD_POST"){
        newPostList=[action.payload,...currPostList]
    }
    return newPostList;
}

const PostListProvider=({children})=>{
    const [postList,dispatchPostList]=useReducer(postListReducer,[]);

    const addPost=(userId,title,body,reactions,tags)=>{
        dispatchPostList({
            type:"ADD_POST",
            payload:{
                id:crypto.randomUUID(),
                title:title,
                body:body,
                reactions:reactions,
                userId:userId,
                tags:tags,
            }
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


    return <PostList.Provider value={{postList,addPost,deletePost}}> 
        {children}
    </PostList.Provider>
}

export default PostListProvider;
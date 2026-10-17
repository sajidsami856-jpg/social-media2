import { createContext, useContext, useReducer } from "react";

export const PostList =createContext({
    postList:[],
    addPost:()=>{},
    deletePost:()=>{},
});

const DEFAULT_POST_LIST=[{
    id:'1',
    title:"Going to Dhaka",
    body:"Hi friends, Im going to Dhaka for my interview",
    reactions:2,
    userId:"user-9",
    tags:["interview","Dhaka","nervous"],
},{
    id:'2',
    title:"Passed HSC",
    body:"I got passed HSC with a good GPA",
    reactions:10,
    userId:"user-12",
    tags:["Passed","HSC-2027","Result"],
}]


const postListReducer=(currPostList,action)=>{
    return currPostList;
}

const PostListProvider=({children})=>{
    const [postList,dispatchPostList]=useReducer(postListReducer,DEFAULT_POST_LIST);

    const addPost=()=>{

    }

    const deletePost=()=>{
        
    }


    return <PostList.Provider value={{postList,addPost,deletePost}}> 
        {children}
    </PostList.Provider>
}

export default PostListProvider;
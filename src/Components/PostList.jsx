import { useContext, useEffect } from 'react';
import Post from './Post';
import {PostList as PostListData} from "../Store/Post-List-Store";
import WelcomeMsg from './WelcomeMsg';
import LoadingSpinner from "./LoadingSpinner";
import { useState } from 'react';
const PostList =()=>{
    const {postList,fetching} =useContext(PostListData);

    return(
        <>
        {fetching && <LoadingSpinner/>}
        {!fetching && postList?.length===0 && <WelcomeMsg />}
        {!fetching && postList?.map((post)=>(<Post key={post.id} post={post}></Post> ))}
        </>
    )
}
export default PostList;
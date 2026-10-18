import { useContext, useEffect } from 'react';
import Post from './Post';
import {PostList as PostListData} from "../Store/Post-List-Store";
import WelcomeMsg from './WelcomeMsg';
import LoadingSpinner from "./LoadingSpinner";
import { useState } from 'react';
const PostList =()=>{
    const {postList,addInitialPosts} =useContext(PostListData);
    const [fetching,setFetching]=useState(false);
    useEffect(()=>{
        setFetching(true); 
        fetch('https://dummyjson.com/posts') 
                .then(res => res.json())
                    .then(data => {addInitialPosts(data.posts)
                        setFetching(false)
                    });
    },[])

    return(
        <>
        {fetching && <LoadingSpinner/>}
        {!fetching && postList.length===0 && <WelcomeMsg />}
        {!fetching && postList.map((post)=>(<Post key={post.id} post={post}></Post> ))}
        </>
    )
}
export default PostList;
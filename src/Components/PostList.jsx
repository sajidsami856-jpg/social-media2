import { useContext } from 'react';
import Post from './Post';
import {PostList as PostListData} from "../Store/Post-List-Store";
import WelcomeMsg from './WelcomeMsg';
import { useState } from 'react';
const PostList =()=>{
    const[currFetch,setFetch]=useState(false);

    const {postList,addInitialPosts} =useContext(PostListData);
    const handleOnClick=()=>{
        
    }

    if(!currFetch){
        fetch('https://dummyjson.com/posts') 
            .then(res => res.json())
                .then(data => {addInitialPosts(data.posts)});
        setFetch(true);
    }

    return(
        <>
        {postList.length===0 && <WelcomeMsg onbuttonClick={handleOnClick}/>}
        {postList.map((post)=>(<Post key={post.id} post={post}></Post> ))}
        </>
    )
}
export default PostList;
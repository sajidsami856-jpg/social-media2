import { useContext } from 'react';
import Post from './Post';
import {PostList as PostListData} from "../Store/Post-List-Store";
import WelcomeMsg from './WelcomeMsg';
const PostList =()=>{
    const {postList,addInitialPosts} =useContext(PostListData);
    const handleOnClick=()=>{
        fetch('https://dummyjson.com/posts') 
            .then(res => res.json())
                .then(data => {addInitialPosts(data.posts)});
    }
    return(
        <>
        {postList.length===0 && <WelcomeMsg onbuttonClick={handleOnClick}/>}
        {postList.map((post)=>(<Post key={post.id} post={post}></Post> ))}
        </>
    )
}
export default PostList;
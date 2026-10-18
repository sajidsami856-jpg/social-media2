import { useContext } from 'react';
import Post from './Post';
import {PostList as PostListData} from "../Store/Post-List-Store";
import WelcomeMsg from './WelcomeMsg';
const PostList =()=>{
    const {postList} =useContext(PostListData);
    // console.log(postList);
    return(
        <>
        {postList.length===0 && <WelcomeMsg />}
        {postList.map((post)=>(<Post key={post.id} post={post}></Post> ))}
        </>
    )
}
export default PostList;
import { useContext, useRef } from "react";
import { PostList } from "../Store/Post-List-Store";
import { useNavigate } from "react-router-dom";

const CreatePost=()=>{
    const {addPost}=useContext(PostList);
    const navigatePage=useNavigate();

    const userIdElement =useRef();
    const titleElement=useRef();
    const bodyElement =useRef();
    const reactionElement=useRef();
    const tagElement=useRef()
    const handleOnSubmit=(evt)=>{
        evt.preventDefault();
        const userId =userIdElement.current.value;
        const title =titleElement.current.value;
        const body=bodyElement.current.value;
        const reactions=reactionElement.current.value;
        const tags=tagElement.current.value.split(" ");

        fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title:title,
                body:body,
                reactions:reactions,
                userId:userId,
                tags:tags,
                })
            }).then(res => res.json())
                .then((post)=> {
                    console.log(post);
                    addPost(post);
                    navigatePage("/");
                });
        
        userIdElement.current.value="";
        userIdElement.current.value="";
        titleElement.current.value="";
        bodyElement.current.value="";
        reactionElement.current.value="";
        tagElement.current.value="";
        
    }

    return (
        <form className="CreatePost" onSubmit={handleOnSubmit}>
            <div className="mb-3">
                <label htmlFor="userId" className="form-label">Enter your user Id  here</label>
                <input ref={userIdElement} type="text" className="form-control" id="userID" aria-describedby="emailHelp" placeholder="How are you feeling today...."/>
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Post Title</label>
                <input type="text" ref={titleElement} className="form-control" id="postTitle" aria-describedby="emailHelp" placeholder="How are you feeling today...."/>
            </div>
            <div className="mb-3">
                <label htmlFor="body" className="form-label">Post Content</label>
                <textarea rows="4" ref={bodyElement} type="text" className="form-control" id="postContent" aria-describedby="emailHelp" placeholder="Tell us more about it"/>
            </div>
            <div className="mb-3">
                <label htmlFor="reactions" className="form-label">Number of Reactions</label>
                <input type="text" ref={reactionElement} className="form-control" id="reactions" aria-describedby="emailHelp" placeholder="How many people reacted to this post"/>
            </div>
            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Enter your tags </label>
                <input type="text" ref={tagElement} className="form-control" id="tags" aria-describedby="emailHelp" placeholder="Please enter your tags using space"/>
            </div>
            <button type="submit" className="btn btn-primary">Post</button>
        </form>
    )
}
export default CreatePost;
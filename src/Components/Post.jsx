import { useContext } from "react";
import "../App.css";
import { MdDelete } from "react-icons/md";
import {PostList} from "../Store/Post-List-Store";
const Post=({post})=>{
    const { deletePost } =useContext(PostList);
    return (
        <div className="card post-card" style={{width: "30rem"}}>
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}>
                    <MdDelete />
                </span>
                <div class="alert alert-primary" role="alert">
                    This post has been reacted by {post.reactions} people.
                </div>
            </div>
        </div>
    )
}
export default Post;






































{/* <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg> */}
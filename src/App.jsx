import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import PostListProvider from "./Store/Post-List-Store";
import Post from './Components/Post';
import CreatePost from './Components/CreatePost';
import PostList from './Components/PostList';

function App() {
  const [currPage,setPage]=useState("Home");

  return (
    <>
    <PostListProvider>
      <div className="containerOfAll">        
        <Sidebar currPage={currPage} setPage={setPage}></Sidebar> 
        <div className='Content'>
          <Header></Header>
          {currPage==="Home" ? <PostList></PostList>:<CreatePost></CreatePost> }
              
        </div>
      </div>
    </PostListProvider>
    </>
  )
}

export default App;

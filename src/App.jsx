import { useState } from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Post from './Components/Post';
import CreatePost from './Components/CreatePost';

function App() {
  const [currPage,setPage]=useState("Home");

  return (
    <>
    <div className="containerOfAll">        
        <Sidebar currPage={currPage} setPage={setPage}></Sidebar> 
        <div className='Content'>
          <Header></Header>
          {currPage==="Home" ? <Post></Post>:<CreatePost></CreatePost> }
          
        </div>
    </div>
      
    </>
  )
}

export default App;

import { PostIndex } from "./PostIndex";
import { PostNew } from "./PostNew";
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";



export function PostsPage() {
    let name = "Test";
    const [posts,setPosts] = useState([]);
    const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
    const [currentPost, setCurrentPost] = useState({});

  const handleIndex = () => {
    axios.get("http://localhost:3000/posts.json").then(responce => {
      console.log(responce);
      setPosts(responce.data)
    })
  }
  const showModal = (post) => {
    console.log(post);
    setCurrentPost(post);
    setIsPostsShowVisible(true);
  }

  const closeModal = () => {
   setIsPostsShowVisible(false);
  };

  const handleCreate = (params) => {
    console.log('handling create');
    axios.post("http://localhost:3000/posts.json", params).then(response => {
      console.log(response.data)
      
      setPosts([...posts, response.data])
    })
  }

  useEffect(handleIndex, [])
  
    return (
      <main>
        <PostNew onCreate={handleCreate} />
        <PostIndex name={name} posts={posts} onShowPost={showModal} />
        <Modal show={isPostsShowVisible} onClose={closeModal}>
        <PostsShow recipe={currentPost} />
        <p>TEST</p>
        <div>
          <p>title: {currentPost.title}</p>
          <p>body: {currentPost.body}</p>
          <p>image: {currentPost.image}</p>
        </div>
      </Modal>
      </main>
    )
  }
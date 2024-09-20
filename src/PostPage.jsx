import { PostIndex } from "./PostIndex";
import { PostNew } from "./PostNew";
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";



export function PostPage() {
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

  useEffect(handleIndex, [])
  
    return (
      <main>
        <PostNew />
        <PostIndex name={name} posts={posts} onShowPost={showModal} />
        <Modal show={isPostsShowVisible} onClose={closeModal}>
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
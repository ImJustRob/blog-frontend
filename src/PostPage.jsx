import { PostIndex } from "./PostIndex";
import { PostNew } from "./PostNew";
import axios from "axios";
import { useState, useEffect } from "react";

export function PostPage() {
    let name = "Test";
    const [posts, setPosts] = useEffect(handleIndex, []);

  const handleIndex = () => {
    axios.get("http://localhost:3000/posts.json").then(responce => {
      console.log(responce);
      setPosts(responce.data)
    })
  }
  useEffect(setPosts,[])
  
    return (
      <main>
        <PostNew />
        <PostIndex name={name} posts={posts} />
        {/* <button onClick={handleIndex}>get the data</button> */}
      </main>
    )
  }
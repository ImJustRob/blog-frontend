import { PostIndex } from "./PostIndex";
import { PostNew } from "./PostNew";
import axios from "axios";

export function PostPage() {
    let name = "Test";
    let posts = [];

  const handleIndex = () => {
    axios.get("http://localhost:3000/posts.json").then(responce => {
      console.log(responce);
    })
  }
  
    return (
      <main>
        <PostNew />
        <PostIndex name={name} posts={posts} />
        <button onClick={handleIndex}>get the data</button>
      </main>
    )
  }
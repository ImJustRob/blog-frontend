export function PostIndex(props) {
    console.log(props);
    return (
      <div id="posts-index">
      <h1>All post</h1>
      <div className="cards"> 
      {props.posts.map(posts => (
          <div key={posts.id} className="posts">
            <h2>{posts.title}</h2>
            <img src={posts.image} alt="" />
            <p> {posts.body}</p>
            <button>More info</button>
          </div>
        ))}
        </div>
  
  
  </div>    
    )
  }
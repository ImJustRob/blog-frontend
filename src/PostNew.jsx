import axios from "axios";

export function PostNew(props) {
  const handleSubmit = (event) => {    
    event.preventDefault();    
    const params = new FormData(event.target);    
    props.onCreate(params, () => event.target.reset())
    
  }
    return (
      <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
      <div>
        <div>
          Title: <input name="title" type="text" />
        </div>
        Body: <input name="body" type="text" />
        </div>
        Image: <input name="image" type="text" />
        <div>
        <button type="submit">Create product</button>
        </div>
    </form>
  </div>
)  
}
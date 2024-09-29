import { Axios } from "axios";

export function PostsShow(props) {
  const handleSubmit = (event) => {    
    event.preventDefault()
    const params = new FormData(event.target)
    props.onUpdate(params, props.post.id, () => event.target.reset())    
  }

  const handleDelete = () => {
    console.log('handle delete'); 
    props.onDestroy(props.post.id)   
  }
    
  
  return (
      <div>
        <p>title: {props.post.title}</p>
        <p>body: {props.post.body}</p>
        <p>image: {props.post.image}</p>
      </div>
    );
  }
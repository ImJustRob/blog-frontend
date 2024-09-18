function Header() {
  return (
    <header>
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
      </header>
  )
}
    function PostNew() {
      return (
        <div id="posts-new">
        <h1>New post</h1>
      <form>
        <div>
          PostNew: <input type="text" />
          </div>
      </form>
    </div>
  )  
}

function PostIndex(props) {
  console.log("The props are", props);
  return (
    <div id="posts-index">
    <h1>All post</h1>
    <p>{props.name}</p>
  <form>
    <div>
      PostIndex: <input type="text" />
      </div>
  </form>
</div>
  )
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2022</p>
    </footer>
  )
}

function PostPage() {
  let name = "Test";
  let posts = [
    {
      id: 1,
      title: "___",
      body: "___",
      image: "___",
    },
    {
      id: 2,
      title: "___",
      body: "___",
      image: "___",
    },
    {
      id: 3,
      title: "___",
      body: "___",
      image: "___",
    },
  ];


  return (
    <main>
      <PostNew />
      <PostIndex name={name} posts={posts} />
    </main>
  )
}

function App() {
  return (
    <div>      
      <Header />

      <PostPage />

      <Footer />
    </div>
  );
}
export default App;
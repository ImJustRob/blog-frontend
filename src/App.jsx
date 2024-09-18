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

function PostIndex() {
  return (
    <div id="posts-index">
    <h1>All post</h1>
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
  return (
    <main>
      <PostNew />
      <PostIndex />
    </main>
  )
}

function App() {
  return (
    <div>      
      <Header />

      <PostNew />

      <PostIndex />

      <Footer />
    </div>
  );
}
export default App;
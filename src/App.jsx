import { useEffect, useState } from "react";
import "./App.css";
import api from "./api/api";
import AddPost from "./components/AddPost.jsx";
import EditPost from "./components/EditPost.jsx";
import Posts from "./components/Posts";
// import initialPosts from "./data/db.js";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null); // post I am editing
  const [error, setError] = useState(null);

  const handleAddPost = async (newPost) => {
    try {
      const id = posts.length ? Number(posts[posts.length - 1].id) + 1 : 1;

      const res = await api.post("/posts", {
        id: id.toString(),
        ...newPost,
      });

      // console.log(res);

      setPosts([...posts, res.data]);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDeletePost = async (postId) => {
    if (confirm("Are you sure you want to delete the post?")) {
      try {
        await api.delete(`/posts/${postId}`);
        const newPosts = posts.filter((post) => post.id !== postId);
        setPosts(newPosts);
      } catch (err) {
        setError(err.message);
      }
    } else {
      console.log("You chose not to delete the post!");
    }
  };

  const handleEditPost = async (updatedPost) => {
    try {
      const res = await api.patch(`/posts/${updatedPost.id}`, updatedPost);

      const updatedPosts = posts.map((post) =>
        post.id === res.data.id ? res.data : post,
      );

      setPosts(updatedPosts);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await api.get("/posts");

        if (res && res.data) {
          setPosts(res.data);
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <div>
        <h1>API Request with api</h1>
        <hr />

        <div>
          <Posts
            posts={posts}
            onDeletePost={handleDeletePost}
            onEditClick={setPost}
          />

          <hr />

          {!post ? (
            <AddPost onAddPost={handleAddPost} />
          ) : (
            <EditPost post={post} onEditPost={handleEditPost} />
          )}

          {error && (
            <>
              <hr />
              <div className="error">{error}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import API from "../services/api";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await API.get("/posts");

      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const likePost = async (id) => {
    try {
      await API.patch(`/posts/${id}/like`);

      fetchPosts();
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const deletePost = async (id) => {
    try {
      await API.delete(`/posts/${id}`);

      fetchPosts();
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div>
      <h2>Posts</h2>

      {posts.map((post) => (
        <div
          key={post._id}
          style={{
            border: "1px solid gray",
            marginBottom: "10px",
            padding: "10px",
          }}
        >
          <h3>{post.title}</h3>

          <p>{post.content}</p>

          <p>Likes: {post.likes}</p>

          <button onClick={() => likePost(post._id)}>Like</button>

          <button onClick={() => deletePost(post._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Posts;

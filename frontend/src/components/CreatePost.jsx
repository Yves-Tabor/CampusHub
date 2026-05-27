import { useState } from "react";
import API from "../services/api";

const CreatePost = ({ fetchPosts }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/posts", formData);

      alert("Post created");

      fetchPosts();
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div>
      <h2>Create Post</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />

        <br />

        <textarea
          name="content"
          placeholder="Content"
          onChange={handleChange}
        />

        <br />

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreatePost;

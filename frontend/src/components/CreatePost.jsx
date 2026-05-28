import { useState } from "react";
import API from "../services/api";

const CreatePost = ({ fetchPosts }) => {
  const [formData, setFormData] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/posts", formData);
      alert("Post created");
      fetchPosts?.();
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div className="sticky top-24">
      <p className="text-[0.68rem] font-medium tracking-[0.12em] uppercase text-black/40 mb-4">
        New post
      </p>

      <h2
        className="text-[1.5rem] font-bold leading-none tracking-tight uppercase text-black mb-6"
        style={{ fontFamily: "'Fraunces', serif" }}
      >
        Share<br />Something
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="flex gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-[#3a4532] flex items-center justify-center flex-shrink-0">
            <span className="text-[#21CD9D] text-xs font-bold uppercase tracking-wide">You</span>
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <input
              type="text"
              name="title"
              placeholder="A headline..."
              onChange={handleChange}
              className="w-full bg-white border border-black/10 rounded-sm px-3.5 py-2.5 text-sm font-semibold text-black placeholder:text-black/25 outline-none focus:border-[#21CD9D] transition-colors"
            />
            <textarea
              name="content"
              placeholder="Share an update or ask a question..."
              onChange={handleChange}
              rows={4}
              className="w-full bg-white border border-black/10 rounded-sm px-3.5 py-2.5 text-sm text-black placeholder:text-black/25 outline-none focus:border-[#21CD9D] transition-colors resize-none"
            />
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-black/10 pt-4">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-black/40 hover:text-[#3a4532] px-2 py-1 rounded-sm hover:bg-black/5 transition-colors"
            >
              📎 File
            </button>
            <button
              type="button"
              className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-black/40 hover:text-[#3a4532] px-2 py-1 rounded-sm hover:bg-black/5 transition-colors"
            >
              🖼 Photo
            </button>
          </div>
          <button
            type="submit"
            className="bg-black text-white text-xs font-bold tracking-[0.06em] uppercase px-5 py-2 rounded-sm hover:bg-[#3a4532] transition-colors"
          >
            Publish →
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
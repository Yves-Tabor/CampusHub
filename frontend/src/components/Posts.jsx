import { useEffect, useState } from "react";
import API from "../services/api";

const FILTERS = ["All Posts", "UPI", "CS", "EBS", "LAW"];

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All Posts");

  const fetchPosts = async () => {
    try {
      const res = await API.get("/posts");
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => { fetchPosts(); }, []);

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
      <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-1">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-1.5 rounded-sm text-xs font-bold tracking-[0.06em] uppercase whitespace-nowrap transition-colors ${
              activeFilter === f
                ? "bg-black text-white"
                : "bg-white border border-black/15 text-black/50 hover:border-black/40 hover:text-black"
            }`}
          >
            {f}
          </button>
        ))}
        <span className="ml-auto text-[0.68rem] tracking-[0.08em] uppercase text-black/30">
          {posts.length} post{posts.length !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {posts.length === 0 && (
          <div className="bg-white border border-black/10 rounded-sm px-6 py-12 text-center">
            <p className="text-xs text-black/25 uppercase tracking-widest font-semibold">
              No posts yet
            </p>
          </div>
        )}

        {posts.map((post, i) => (
          <article
            key={post._id}
            className="bg-white border border-black/10 rounded-sm p-5 hover:-translate-y-0.5 transition-all duration-200"
          >
            {/* Post header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#3a4532] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#21CD9D] text-[0.6rem] font-bold uppercase">
                    {post.author?.username?.slice(0, 2) || String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-black">
                    {post.author?.username || "Student"}
                  </p>
                  <p className="text-[0.65rem] text-black/35 uppercase tracking-wide">
                    Campus Feed
                  </p>
                </div>
              </div>
              <span className="text-[0.62rem] text-black/25 uppercase tracking-wide font-medium">
                #{String(i + 1).padStart(2, "0")}
              </span>
            </div>

            <h3
              className="text-base font-bold uppercase tracking-tight text-black mb-2 leading-tight"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              {post.title}
            </h3>
            <p className="text-sm text-black/60 leading-relaxed mb-4">
              {post.content}
            </p>

            {/* Actions */}
            <div className="flex items-center justify-between border-t border-black/8 pt-3">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => likePost(post._id)}
                  className="flex items-center gap-1.5 text-[0.72rem] font-bold tracking-[0.06em] uppercase text-black/35 hover:text-[#21CD9D] transition-colors"
                >
                  ↑ {post.likes ?? 0}
                </button>
                <span className="text-black/15 select-none text-xs">|</span>
                <button className="text-[0.72rem] font-bold tracking-[0.06em] uppercase text-black/35 hover:text-black transition-colors">
                  Reply
                </button>
              </div>
              <button
                onClick={() => deletePost(post._id)}
                className="text-[0.72rem] font-bold tracking-[0.06em] uppercase text-black/25 hover:text-red-500 transition-colors"
              >
                Delete
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Posts;
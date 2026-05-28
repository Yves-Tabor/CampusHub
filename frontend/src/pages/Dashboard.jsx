import { useState } from "react";
import CreatePost from "../components/CreatePost";
import Posts from "../components/Posts";

const Dashboard = () => {
  const [showCreate, setShowCreate] = useState(false);

  return (
    <main
      className="min-h-screen px-10 pt-8 pb-10"
      style={{ backgroundColor: "#f7f5f0", fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Page header */}
      <div className="flex justify-between items-center mb-8 border-b border-black pb-5">
        <h1
          className="text-[2.5rem] font-bold leading-none tracking-tight uppercase text-black"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Campus<br />
          <span className="text-[#3a4532]">Feed</span>
        </h1>
        <div className="flex items-center gap-4">
          <span className="text-[0.68rem] font-medium tracking-[0.12em] uppercase text-[#21CD9D]">
            #2026
          </span>
          <button
            onClick={() => setShowCreate((prev) => !prev)}
            className={`text-xs font-bold tracking-[0.06em] uppercase px-5 py-2.5 rounded-sm transition-all ${
              showCreate
                ? "bg-black/10 text-black hover:bg-black/15"
                : "bg-black text-white hover:bg-[#3a4532]"
            }`}
          >
            {showCreate ? "✕ Cancel" : "+ New Post"}
          </button>
        </div>
      </div>

      {showCreate && (
        <div className="mb-8 bg-white border border-black/10 rounded-sm p-6">
          <CreatePost onSuccess={() => setShowCreate(false)} />
        </div>
      )}

      <div className={showCreate ? "grid grid-cols-1 gap-10" : ""}>
        <Posts />
      </div>

      {/* Footer strip */}
      <div className="flex justify-between items-center border-t border-black pt-5 mt-10">
        <span className="text-[0.68rem] tracking-[0.08em] uppercase text-black flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-black inline-block" />
          CampusULK
        </span>
        <span className="text-[0.68rem] tracking-[0.08em] uppercase text-black">
          www.campushub.com
        </span>
      </div>
    </main>
  );
};

export default Dashboard;
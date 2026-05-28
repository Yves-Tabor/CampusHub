import { Link } from "react-router-dom";
import campusPeople from "./../assets/img/campusPeople.png";
import campusToon from "./../assets/img/campusToon.png";
import campusChat from "./../assets/img/campusChat.png";

const Home = () => {
  return (
    <main
      className="h-fit flex flex-col px-10 pt-7 pb-1"
      style={{
        backgroundColor: "#ffffff",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <h1
        className="text-[4rem] font-bold leading-none tracking-tight uppercase text-black mb-10"
        style={{ fontFamily: "'Fraunces', serif" }}
      >
        Campus
        <br />
        Life
        <br />
        <span className="text-[#3a4532]">Today</span>
      </h1>

      <div
        className="z-0 grid gap-3 mb-10"
        style={{ gridTemplateColumns: "0.9fr 1.5fr 1fr", alignItems: "end" }}
      >
        <div className="rounded-sm overflow-hidden h-40">
          <img
            src={campusPeople}
            alt="Students studying together"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-sm overflow-hidden h-55 -translate-y-4">
          <img
            src={campusToon}
            alt="Student on campus lawn"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-sm overflow-hidden h-43.75">
          <img
            src={campusChat}
            alt="Student in library"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 mb-10">
        <Link
          to="/register"
          className="text-sm font-bold text-black px-6 py-2.5 rounded-sm tracking-wide hover:bg-black hover:text-white transition-colors"
        >
          Explore Campus
        </Link>
        <Link
          to="/dashboard"
          className="text-sm font-bold text-black border border-black px-6 py-2.5 rounded-sm hover:bg-black hover:text-white hover:border-black transition-colors flex items-center gap-1.5"
        >
          Learn more <span className="text-base leading-none">→</span>
        </Link>
      </div>

      <div className="flex justify-between items-center border-t border-black pt-5 mt-auto">
        <span className="text-[0.68rem] tracking-[0.08em] uppercase text-black flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-black inline-block" />
          CampusULK
        </span>
      </div>
    </main>
  );
};

export default Home;
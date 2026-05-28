import { useState } from "react";
import API from "../services/api";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit button clicked");
    try {
      const res = await API.post("/users/register", formData);
      console.log(res.data);
      alert("User registered successfully");
      navigate("/login", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col max-w-sm w-full">
      <p className="text-[0.68rem] font-medium tracking-[0.12em] uppercase text-[#3a4532] mb-6">
        CampusHub/ULK — 2026
      </p>

      <h2
        className="text-[2rem] font-bold leading-none tracking-tight uppercase text-black mb-8"
        style={{ fontFamily: "'Fraunces', serif" }}
      >
        Create
        <br />
        Account
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-[0.72rem] font-semibold tracking-[0.08em] uppercase text-black">
            Username
          </label>
          <input
            type="text"
            name="username"
            placeholder="yourname"
            onChange={handleChange}
            className="border border-black rounded-sm px-3.5 py-2.5 text-sm font-medium text-black placeholder:text-black/30 outline-none focus:border-[#21CD9D] transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[0.72rem] font-semibold tracking-[0.08em] uppercase text-black">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="you@campus.edu"
            onChange={handleChange}
            className="border border-black rounded-sm px-3.5 py-2.5 text-sm font-medium text-black placeholder:text-black/30 outline-none focus:border-[#21CD9D] transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[0.72rem] font-semibold tracking-[0.08em] uppercase text-black">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            onChange={handleChange}
            className="border border-black rounded-sm px-3.5 py-2.5 text-sm font-medium text-black placeholder:text-black/30 outline-none focus:border-[#21CD9D] transition-colors"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white text-sm font-bold tracking-[0.06em] uppercase py-3 rounded-sm hover:bg-[#3a4532] transition-colors mt-1"
        >
          Register →
        </button>
      </form>

      <p className="text-sm text-black/50 mt-6">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-black font-semibold border-b border-[#21CD9D]"
        >
          Sign in here
        </Link>
      </p>
    </div>
  );
};

export default Register;

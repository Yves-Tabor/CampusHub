import Login from "../components/Login";

const LoginPage = () => {
  return (
    <main
      className="grid grid-cols-2 h-[90vh]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div
        className="flex flex-col justify-between px-10 pt-7 pb-10"
        style={{
          background: "linear-gradient(to right, #3a4532 60%, #ffffff)",
        }}
      >
        <h1
          className="text-[3.2rem] font-bold leading-none tracking-tight uppercase text-black"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Welcome
          <br />
          Back
          <br />
          <span className="text-white">Today</span>
        </h1>

        <div className="flex justify-between items-center border-t border-black pt-5"></div>
      </div>

      <div className="bg-white flex items-center justify-center px-10 py-10">
        <Login />
      </div>
    </main>
  );
};

export default LoginPage;

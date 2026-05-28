import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const { pathname } = useLocation();

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const navLinkClass = (path) =>
    `rounded-sm px-4 py-2 text-sm font-bold tracking-wide transition-all ${
      pathname === path
        ? "bg-[#21CD9D]/10 text-white font-bold"
        : "text-white hover:bg-white/7 hover:text-white"
    }`;

  return (
    <>
      <nav
        className="fixed left-0 top-0 z-50 flex w-full flex-col bg-[#2e3829] px-8 border-b border-white/8 lg:flex-row lg:items-center lg:justify-between"
        style={{ height: "68px" }}
      >
        <div className="flex w-full items-center justify-between lg:w-auto">
          <Link
            to="/"
            className="text-[1.35rem] font-bold tracking-tight text-white"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Campus<span className="text-black">Hub</span>
          </Link>
        </div>

        <div className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around border-t border-white/8 bg-[#2e3829] px-4 py-3 lg:relative lg:bottom-auto lg:left-auto lg:w-auto lg:gap-2 lg:border-none lg:p-0">
          <Link to="/" className={navLinkClass("/")}>
            Home
          </Link>

          {!token ? (
            <>
              <div className="hidden lg:block w-px h-5 bg-white/10 mx-1" />
              <Link to="/login" className={navLinkClass("/login")}>
                Login
              </Link>
              <Link
                to="/register"
                className="rounded-sm bg-black px-5 py-2 text-sm font-bold text-white tracking-wide transition-all hover:-translate-y-px"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <div className="hidden lg:block w-px h-5 bg-white/10 mx-1" />
              <Link to="/dashboard" className={navLinkClass("/dashboard")}>
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="rounded-sm border border-black px-4 py-2 text-sm font-medium text-red-400 transition-all hover:bg-red-400/8 hover:border-red-400/50"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>

      <div className="h-17"></div>
    </>
  );
};

export default Navbar;

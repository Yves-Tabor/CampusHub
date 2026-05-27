import Register from "./components/Register";
import Login from "./components/Login";
import CreatePost from "./components/CreatePost";
import Posts from "./components/Posts";

function App() {
  return (
    <>
      <div className="bg-black text-white p-10">
        <h1 className="text-5xl font-bold">CampusHub</h1>
      </div>
      <Register />

      <hr />

      <Login />

      <hr />

      <CreatePost />

      <hr />

      <Posts />
    </>
  );
}

export default App;

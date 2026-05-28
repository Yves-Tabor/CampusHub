import CreatePost from "../components/CreatePost";
import Posts from "../components/Posts";

const Dashboard = () => {

    return (
        <div>
            <h1>Dashboard</h1>

            <CreatePost />

            <Posts />
        </div>
    );
};

export default Dashboard;
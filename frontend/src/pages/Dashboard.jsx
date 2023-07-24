import Sidebar from "../components/Sidebar/Sidebar";
import UsserList from "../components/Main/UserList";
import Right from "../components/right/Right";
import "./dash.css";

const Dashboard = () => {
  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="main">
          <UsserList />
        </div>
        <Right />
      </div>
    </>
  );
};

export default Dashboard;

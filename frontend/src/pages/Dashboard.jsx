import Sidebar from "../components/Sidebar/Sidebar";
import Book from "../components/dash/book";
import Right from "../components/right/Right";
import "./dash.css";

const Dashboard = () => {
  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="main">
          <Book />
        </div>
        <Right />
      </div>
    </>
  );
};

export default Dashboard;

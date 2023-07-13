import Sidebar from "../components/Sidebar/Sidebar";
import Right from "../components/right/Right";
import "./dash.css";
import SingleBook from "../components/dash/singleBook";

const SinglePage = () => {
  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="main">
          <SingleBook />
        </div>
        <Right />
      </div>
    </>
  );
};

export default SinglePage;

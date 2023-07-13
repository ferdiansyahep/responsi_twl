import Sidebar from "../components/Sidebar/Sidebar";
import Right from "../components/right/Right";

import CreateBook from "../components/dash/createBook";
import "./dash.css";

const AddPage = () => {
  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="main">
          <CreateBook />
        </div>
        <Right />
      </div>
    </>
  );
};

export default AddPage;

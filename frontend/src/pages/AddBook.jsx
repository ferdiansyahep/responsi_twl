import Sidebar from "../components/Sidebar/Sidebar";
import Right from "../components/right/Right";

import AddUser from "../components/Main/AddUser";
import "./dash.css";

const AddPage = () => {
  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="main">
          <AddUser />
        </div>
        <Right />
      </div>
    </>
  );
};

export default AddPage;

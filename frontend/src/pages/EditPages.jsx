import Sidebar from "../components/Sidebar/Sidebar";
import Right from "../components/right/Right";
import EditUser from "../components/Main/EditUser";
import "./dash.css";

const EditPage = () => {
  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="main">
          <EditUser />
        </div>
        <Right />
      </div>
    </>
  );
};

export default EditPage;

import Sidebar from "../components/Sidebar/Sidebar";
import Right from "../components/right/Right";
import EditBook from "../components/dash/editBook";
import "./dash.css";

const EditPage = () => {
  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="main">
          <EditBook />
        </div>
        <Right />
      </div>
    </>
  );
};

export default EditPage;

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/SignupPages";
import Login from "./pages/LoginPages";
import SinglePage from "./pages/SingleBookPage";

import EditPage from "./pages/EditPages";
import "./App.css";
import AddPage from "./pages/AddBook";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        {user && <Route path="/" exact element={<Dashboard />} />}
        {user && <Route path="/books/:slug" exact element={<SinglePage />} />}
        {user && <Route path="/createbook" exact element={<AddPage/>} />}
        {user && <Route path="/editbook/:slug" exact element={<EditPage/>} />}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/books/:slug" element={<Navigate replace to="/login" />} />
        <Route path="/createbook" element={<Navigate replace to="/login" />} />
        <Route path="/editbook/:slug" element={<Navigate replace to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;

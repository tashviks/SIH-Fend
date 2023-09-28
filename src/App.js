import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Project from "./components/Project/Project";
import AddProject from "./components/AddProject/AddProject";
import Main from "./components/Main/Main";
import Plag from "./components/Plag/Plag";
import UserProfile from "./components/Profile/UserProfile";
import UniProfile from "./components/Profile/UniProfile";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Main />} />
        <Route path="/addproject" element={<AddProject />} />
        <Route path="/project" element={<Project />} />
        <Route path="/plag" element={<Plag />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/uniprofile" element={<UniProfile />} />
      </Routes>
    </Router>
  );
}

export default App;

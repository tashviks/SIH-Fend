import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Login from "./pages/Login";
import Project from "./pages/Project";
import AddProject from "./pages/AddProject";
import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/addproject" element={<AddProject />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;

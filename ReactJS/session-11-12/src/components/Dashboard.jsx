import { Link, Route, Routes } from "react-router-dom";
import Skills from "./dashboard/skills";
import Experience from "./dashboard/experience";
import Project from "./dashboard/project";

function Dashboard() {
    return (
        <div className="container">
            <h3>Dashboard Component</h3>
            <h4>Welcome Admin</h4>

            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link className="nav-link active" to="/dashboard/" >Skills</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/dashboard/experience" >Experience</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/dashboard/projects" >Projects</Link>
                </li>
            </ul>

            <Routes>
                <Route path="" element={<Skills />} />
                <Route path="experience" element={<Experience />} />
                <Route path="projects" element={<Project />} />
            </Routes>
        </div>
    );
}

export default Dashboard;
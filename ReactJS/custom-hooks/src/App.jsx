import { Route, Routes } from "react-router-dom";
import Posts from "./components/Posts";
import useUsersData from "./hooks/useUsersData";
import useWindowWidth from "./hooks/useWindowWidth"
import Login from "./components/Login";
import Register from "./components/Register";

function App() {

  // const width= useWindowWidth(); //call hook

  return (
    <div className="container mt-5">
      

      <Routes>
        <Route path="" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="posts" element={<Posts />} />
      </Routes>
      {/* <h3>Window Width</h3>
      <p>current Width is {width}</p> */}
    </div>
  )
}

export default App

import {Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"
import Home from "./components/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Dashboard from "./components/Dahsboard"

function App() {

  return (
    <div className="container-cluid">
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dash" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

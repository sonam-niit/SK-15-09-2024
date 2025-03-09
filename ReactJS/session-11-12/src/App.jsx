import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer"
import Header from "./components/header"
import Home from "./components/home"
import AboutUs from "./components/About"
import ContactUs from "./components/Contacts"
import Products from "./components/Products"
import Register from "./components/Register"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import { useState } from "react"
import Details from "./components/Details"
import PageNotFound from "./components/PageNotFound"

function App() {

  const [loggedIn,setLoggedIn]=useState(false);

  return (
    // Using Browser Router we can render component in Browser
    <BrowserRouter> 
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="products" element={<Products />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="dashboard/*" element={<Dashboard />} />
        <Route path="details/:id" element={<Details />} />
        {/* Dynamic URL */}
        <Route path="*" element={<PageNotFound />} />
        {/* Kepp * path always at last */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

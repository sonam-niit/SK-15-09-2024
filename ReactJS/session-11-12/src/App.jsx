import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer"
import Header from "./components/header"
import Home from "./components/home"
import AboutUs from "./components/About"
import ContactUs from "./components/Contacts"
import Products from "./components/Products"
import Register from "./components/Register"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="products" element={<Products />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

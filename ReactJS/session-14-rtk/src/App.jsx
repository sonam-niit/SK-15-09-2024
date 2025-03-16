import { Route, Routes } from "react-router-dom"
import Counter from "./components/counter"
import Header from "./components/Header"
import Products from "./components/Products"
import Cart from "./components/Cart"

function App() {

  return (
    <div>
      <h1>Redux Tool Kit</h1>
      <Header />
      <Routes>
        <Route path="counter" element={<Counter />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App

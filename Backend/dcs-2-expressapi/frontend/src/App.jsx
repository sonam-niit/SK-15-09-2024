import { Link, Route, Routes } from "react-router-dom"
import CustomerList from "./components/CustomerList"
import Home from "./components/Home"

function App() {

  return (
    <div className="container mt-3">
      <Link className="btn btn-warning my-3 me-3" to=''>Home</Link>
      <Link className="btn btn-primary my-3" to='custlist'>Customer List</Link>

      <Routes>
        <Route path='' element={<Home />}/>
        <Route path="custlist" element={<CustomerList />}/>
      </Routes>
    </div>
  )
}

export default App

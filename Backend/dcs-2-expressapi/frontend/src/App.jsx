import { Link, Route, Routes } from "react-router-dom"
import CustomerList from "./components/CustomerList"
import Home from "./components/Home"
import AddCustomer from "./components/AddCustomer"

function App() {

  return (
    <div className="container mt-3">
      <Link className="btn btn-warning my-3 me-3" to=''>Home</Link>
      <Link className="btn btn-primary my-3 me-3" to='custlist'>Customer List</Link>
      <Link className="btn btn-success my-3" to='addcust'>Add New Customer</Link>
      <Routes>
        <Route path='' element={<Home />}/>
        <Route path="custlist" element={<CustomerList />}/>
        <Route path="addcust" element={<AddCustomer />}/>
        <Route path="editcust/:id" element={<AddCustomer />}/>
        {/* Same Component Used for edit also, Dynamic URL */}
      </Routes>
    </div>
  )
}

export default App

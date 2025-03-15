import { useSelector } from "react-redux"
import Counter from "./components/Counter";
import Header from "./components/Header";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  const count= useSelector(state=>state.counter.count);
  return (
    <div className="container">
      <h1>Redux Demo: {count}</h1>
      <Header />
      
      <Routes>
        <Route path="counter" element={<Counter />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App

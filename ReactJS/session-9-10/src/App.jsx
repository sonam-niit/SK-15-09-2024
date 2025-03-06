import { useContext } from "react"
import BackgroundMusic from "./lab-session/BackgroundMusic"
import Login from "./lab-session/Login"
import WindowSize from "./lab-session/WindowResize"
import Register from "./session9/Register"
import { ThemeContext } from "./lab-session/ThemeContext"
import UsersList from "./axios/userslist"
import Dashboard from "./axios/dashboard"
import ProductDashboard from "./04-03/ProductDashboard"
import FormData from "./lab-session4/FormData"
import WeatherApp from "./lab-session4/WathearApp"

function App() {
  // const {theme}= useContext(ThemeContext)
  return (
    <div>

        <WeatherApp />
        {/* <FormData /> */}

      {/* Topics Covered on 4th March*/}
      {/* <ProductDashboard />
        <Dashboard />
        <UsersList /> */}
    </div>
    // <div className={`container-fluid ${theme=='light'?'bg-info text-dark':'bg-dark text-light'}`}>
    //   <BackgroundMusic />
    //   <WindowSize />
    //   <Login />
    //   {/* <Register /> */}
    // </div> 
  )
}

export default App

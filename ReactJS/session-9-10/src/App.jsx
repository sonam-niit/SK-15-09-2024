import { useContext } from "react"
import BackgroundMusic from "./lab-session/BackgroundMusic"
import Login from "./lab-session/Login"
import WindowSize from "./lab-session/WindowResize"
import Register from "./session9/Register"
import { ThemeContext } from "./lab-session/ThemeContext"

function App() {
  const {theme}= useContext(ThemeContext)
  return (
    <div className={`container-fluid ${theme=='light'?'bg-info text-dark':'bg-dark text-light'}`}>
      <BackgroundMusic />
      <WindowSize />
      <Login />
      {/* <Register /> */}
    </div> 
  )
}

export default App

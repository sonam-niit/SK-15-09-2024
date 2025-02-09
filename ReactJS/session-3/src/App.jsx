import UseCase1 from "./components/UseCase1"
import UseCase2 from "./components/UseCase2"
import UseCase3 from "./components/UseCase3"
import UseCase4 from "./components/UseCase4"
import Button from "./props-concepts/Button"
import Greetings from "./props-concepts/Greetings"
import List from "./props-concepts/List"
import WeatherDashboard from "./props-concepts/WeatherDashboard"

function App() {

  return (
    <>
      {/* 08-02-2025- Props Concepts Discussed */}
      <h1>Props Demo</h1>
      <WeatherDashboard />
      <List />
      <Button name='Login' method={()=>alert('Login clicked')} />
      <Button name='Register' method={()=>alert('Register clicked')} />
      <Greetings name="Sonam Soni" message="Good Evening" />
      <Greetings />
      <Greetings name="John Doe" />
      {/* <h1>State Demos</h1>
      <UseCase4 />
      <UseCase3 />
      <UseCase1 />
      <UseCase2 /> */}
      {/* 08-02-2025- State Concepts Discussed */}
    </>
  )
}

export default App

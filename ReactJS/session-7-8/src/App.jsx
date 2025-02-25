import { useState } from "react"
import GrandParent1 from "./contect-demo/GrandParent1"
import MessageProvider from "./contect-demo/MessageProvider"
import GrandParent from "./prop-dril/GrandParent"
import Example1 from "./useeffect/Example1"
import Example2 from "./useeffect/Example2"
import FetchData from "./useeffect/FechData"
import Demo1 from "./propsdemos/Demo1"
import Header from "./propsdemos/Header"
import Login from "./propsdemos/Login"
import Timer from "./propsdemos/Timer"
import Navbar from "./propsdemos/Navbar"

function App() {
  const [flag, setFlag] = useState(false);
  const data=[
    {name:'sonam',message:'hello'},
    {name:'pankaj',message:'bye bye'},
    {name:'vasim',message:'Good evening'},
  ]
  return (
    // **** Doubt Clearing Class 25-02 ***
    <div className="container">
      <Navbar />
      <Timer />
      <Header /> <hr/>
      <Login />
      {/* {
        data.map((obj,index)=>
        <Demo1 name={obj.name} message={obj.message} key={index}/>)
      } */}
    </div>

    // ****Session 8 ***
    // <div>
    //   <FetchData />
    //   <Example1 />
    //   <button onClick={()=>setFlag(!flag)}>
    //     {flag ? 'Hide' : 'Show'}
    //   </button>
    //   { flag?<Example2 />:''}
    // </div>
    // ****Session 7 ***
    // <div style={{border:'2px solid black',padding:'10px',margin:'10px'}}>
    //   {/* <h2>App Component</h2>
    //   <GrandParent /> */}
    //   <MessageProvider>
    //       <GrandParent1 />
    //   </MessageProvider>
    // </div>
  )
}

export default App

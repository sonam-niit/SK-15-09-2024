import GrandParent1 from "./contect-demo/GrandParent1"
import MessageProvider from "./contect-demo/MessageProvider"
import GrandParent from "./prop-dril/GrandParent"

function App() {

  return (
    <div style={{border:'2px solid black',padding:'10px',margin:'10px'}}>
      {/* <h2>App Component</h2>
      <GrandParent /> */}
      <MessageProvider>
          <GrandParent1 />
      </MessageProvider>
    </div>
  )
}

export default App

import { ToastContainer } from 'react-toastify';
import Toastify from './components/Toastify';
import AlertDemo from './components/AlertDemo';
function App() {

    return (
      <div>
        <AlertDemo />
        <Toastify />
        <ToastContainer />
      </div>
    );
}

export default App

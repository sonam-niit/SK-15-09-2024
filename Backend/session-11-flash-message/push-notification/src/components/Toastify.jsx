import { toast } from 'react-toastify';
function Toastify() {
  const notify = () => toast("Wow so easy!");
  const success =()=>toast.success('Logged In Successfully')
  const warning =()=>toast.warning('Warning Message')
  const error =()=>toast.error('Warning Message')
  const info =()=>toast.info('Warning Message')
  
    return (
      <div>
        <button onClick={notify}>Notify!</button>
        <button onClick={success}>Login</button>
        <button onClick={warning}>Warning</button>
        <button onClick={error}>Error</button>
        <button onClick={info}>Info</button>
      </div>
    );
}

export default Toastify

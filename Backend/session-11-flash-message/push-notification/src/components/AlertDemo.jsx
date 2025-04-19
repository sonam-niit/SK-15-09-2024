import Swal from 'sweetalert2'
function AlertDemo() {
    const trigger=()=>{
        Swal.fire({
            title: 'Success!',
            text: 'Registration Done Successfully!',
            icon: 'success',
            confirmButtonText: 'Done'
          })
    }
    const error=()=>{
        Swal.fire({
            title: 'Error!',
            text: 'Try after Sometime!',
            icon: 'error',
            confirmButtonText: 'OK'
          })
    }
    return ( 
        <div>
            <button onClick={trigger}>Click Me</button>
            <button onClick={error}>Error</button>
        </div>
     );
}

export default AlertDemo;
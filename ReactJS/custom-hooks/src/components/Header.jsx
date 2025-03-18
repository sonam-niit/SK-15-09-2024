import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Header() {
    return ( 
        <div>
            <FontAwesomeIcon icon={faRightFromBracket} size="2xl" style={{color: "#df0c16",}} 
            className='float-end'/>
        </div>
     );
}

export default Header;
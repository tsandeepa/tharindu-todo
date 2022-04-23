import { useNavigate } from "react-router-dom";
import { HeaderTop } from "../styles/Header.styled";

const Header = () => {
    const navigate = useNavigate()

    const handleLogout = () =>{
        navigate('/login')
    }
    return ( 
        <HeaderTop>
            <h3>To Do List</h3>
            <button onClick={handleLogout}>Logout</button>
        </HeaderTop>
     );
}
 
export default Header;
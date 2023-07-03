import "./navbar.css";
import {Link} from "react-router-dom";
import {useContext} from 'react';
import { AuthContext } from "../../context/AuthContext";
import Out from "../out/Out";

const Navbar = () => {

  const {user} = useContext(AuthContext);


  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color:"inherit",textDecoration:"none"}} >
        <h3 className="logo">TravelBooking</h3>
        </Link>
        {user ? 
        <div>
          {user.username}
        <Out/>
          </div>
       
         :
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
        }
      </div>
    </div>
  )
}

export default Navbar
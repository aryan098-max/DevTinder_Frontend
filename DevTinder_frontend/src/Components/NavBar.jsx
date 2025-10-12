import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router";

const NavBar = () => {

    // suscribing to the store - getting user info from the store
    const user = useSelector((store)=>store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async ()=>{
        try{
            await axios.post(BASE_URL + "/logout",{},{withCredentials:true});
            
            // dispatching an action to remove th user from the redux store
            dispatch(removeUser());
            
            // navigating to login
            navigate("/login");

        } catch (err){
            console.error(err);
        }
    }

  return (
    <div>
        <div className="navbar bg-base-300 shadow-sm">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-2xl">💻DevTinder</Link>
            </div>
            {/* The profile tab is only visible when user is present */}
           {user && <div className="flex gap-2">
                <div><p>{"Welcome " + user.firstName}</p></div>
                <div className="dropdown dropdown-end mr-10">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS Navbar component"
                        src="https://cdn.vectorstock.com/i/1000v/92/16/default-profile-picture-avatar-user-icon-vector-46389216.jpg" />
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li>
                    <Link to="/profile" className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </Link>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a onClick={handleLogout}>Logout</a></li>
                </ul>
                </div>
            </div>}
        </div> 
    </div>
  )
}

export default NavBar
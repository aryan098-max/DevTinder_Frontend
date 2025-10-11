import { Outlet, useNavigate } from 'react-router';
import NavBar from './NavBar';
import Footer from './Footer';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useEffect } from 'react';


const Body = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store)=>store.user);

  const fetchUser = async () =>{
    try{
      const res = await axios.get(BASE_URL + "/profile/view",{withCredentials:true});
      
      // updating redux store, dispatching an action
      dispatch(addUser(res.data.user));

    } catch(err){
      
      // token not valid, status = 401 coming from backend
      if(err.status === 401){
        navigate('/login');
      }
      console.error(err);
    }
  }

  // useEffect() - for fetching the loggedInUser
  useEffect(()=>{
    // if !userData, make api call
    if(!userData){
      fetchUser();
    }
  }, [])

  return (
    <div>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Body
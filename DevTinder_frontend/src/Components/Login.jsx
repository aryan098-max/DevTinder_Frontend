import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import axios from 'axios';
import {useNavigate} from 'react-router';
import {BASE_URL} from '../utils/constants';


const Login = () => {
  
  const navigate = useNavigate()
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin= async ()=>{

    try{
      const res = await axios.post( BASE_URL + '/login',{
        emailId, 
        password
      },{withCredentials:true})

      // dispatching an action
      dispatch(addUser(res.data));

      // re-directing to feed
      navigate("/");

    } catch(err){
      console.error(err);
    }
  }


  return (
    <div className='flex justify-center mt-10'>
        <div className="card bg-base-300 w-96 shadow-sm">
          <div className="card-body">
            <h2 className="card-title justify-center">Login</h2>
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-[15px]">Email Id</legend>
                <input type="text" 
                  value={emailId} 
                  onChange={(e)=>setEmailId(e.target.value)} 
                  className="input" 
                  placeholder="steve123@gmail.com" 
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-[15px]">Password</legend>
                <input type="text"
                 value={password} 
                 onChange={(e)=>setPassword(e.target.value)}
                 className="input" 
                 placeholder=""
                />
              </fieldset>
            </div>

            <div className="card-actions justify-center">
              <button className="btn btn-primary" onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login
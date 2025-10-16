import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import axios from 'axios';
import {useNavigate} from 'react-router';
import {BASE_URL} from '../utils/constants';


const Login = () => {
  
  const navigate = useNavigate();
  const [isLLoginForm, setIsLoginForm] = useState(true)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSingup = async () =>{

    try{

      const response = await axios.post(BASE_URL + "/signup",
        {firstName, lastName, emailId, password},{withCredentials:true});

        // dispatching action addUser
        dispatch(addUser(response?.data?.data));

        // navigating user to "/profile"
        navigate("/profile");
        
    } catch (err){

      // setting error
      setError(err?.response?.data?.message || "Something Went Wrong!!");
      console.log(err?.response?.data?.data);
    }
  }

  const handleLogin= async ()=>{
    setIsLoginForm(true);
    try{
      const response = await axios.post( BASE_URL + '/login',{
        emailId, 
        password
      },{withCredentials:true})
      
      // dispatching an action
      dispatch(addUser(response?.data?.data));

      // re-directing to feed
      navigate("/");

    } catch(err){
      setError(err?.response?.data?.message || "Something Went Wrong!!");
      console.error(err);
    }
  }

  return (
    <div className='flex justify-center my-40'>
        <div className="card bg-base-300 w-96 shadow-sm">
          <div className="card-body">
            <h2 className="card-title justify-center font-bold text-2xl">{isLLoginForm? "Login":"Sign Up"}</h2>
            <div>
             {
               !isLLoginForm &&
               ( <div> 
                  <fieldset className="fieldset">
                  <legend className="fieldset-legend text-[15px]">First Name</legend>
                  <input type="text" 
                    value={firstName} 
                    onChange={(e)=>setFirstName(e.target.value)} 
                    className="input" 
                    placeholder="" 
                  />
                </fieldset>

                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-[15px]">Last Name</legend>
                  <input type="text" 
                    value={lastName} 
                    onChange={(e)=>setLastName(e.target.value)} 
                    className="input" 
                    placeholder="" 
                  />
                  </fieldset>
               </div>
              ) 
            }

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-[15px]">Email Id</legend>
                <input type="text" 
                  value={emailId} 
                  onChange={(e)=>setEmailId(e.target.value)} 
                  className="input" 
                  placeholder="" 
                />
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-[15px]">Password</legend>
                <input type="password"
                 value={password} 
                 onChange={(e)=>setPassword(e.target.value)}
                 className="input" 
                 placeholder=""
                />
              </fieldset>
            </div>
              <p className='text-red-500'>{error}</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary" onClick={isLLoginForm ? handleLogin : handleSingup}>{isLLoginForm?"Login":"Sing Up"}</button>
            </div>
            <p className="hover:underline hover:text-blue-500 cursor-pointer" onClick={()=>{
              setIsLoginForm(!isLLoginForm); 
              setFirstName("");
              setLastName("");
              setEmailId("");
              setPassword("");
              setError("");
              }}
            >
              {
                isLLoginForm ? "New User? Sign Up Here": "User Already Exists? Login Here"

              }
            </p>
          </div>
        </div>
    </div>
  )
}

export default Login
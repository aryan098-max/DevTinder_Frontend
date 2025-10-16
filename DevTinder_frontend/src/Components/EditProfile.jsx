import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({userData})=>{

  const [firstName, setFirstName] = useState(userData?.firstName);
  const [lastName, setLastName] = useState(userData?.lastName);
  const [photoURL, setPhotoURL] = useState(userData?.photoURL);
  const [age, setAge] = useState(userData?.age || 0);
  const [gender, setGender] = useState(userData?.gender|| "male");
  const [about, setAbout] = useState(userData?.about);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();

  const saveProfile = async ()=>{

    try{
        const response = await axios.patch(BASE_URL + "/profile/edit",
            {
             firstName, 
             lastName, 
             photoURL, 
             age, 
             gender, 
             about
            },
            {withCredentials:true}
        )
        
        // clear previous error for the next api call
        setError("");

        // dispatching an action to update userReducer (redux store)
        // updating with data returned by "/edit/profile"
        dispatch(addUser(response?.data?.data));

        // showing Toast after user is updated 
        setShowToast(true);

        // after a certain time remove the toast
        setTimeout(()=>{
            setShowToast(false);
        },3000)

    } catch (err){

        if(err){
            setError(err?.response?.data);
        }
        console.error(err);
    }
  }

  return (
    <>
    {
        showToast && (
              <div className="toast toast-top toast-center z-10">
                <div className="alert alert-success">
                    <span>User updated successfully.</span>
                </div>
            </div>
        )
    }
      <div className="flex flex-wrap justify-center">
        <div className='flex justify-center mt-10 mb-30'>
            <div className="card bg-base-300 w-85 shadow-sm">
            <div className="card-body">
                <h2 className="card-title justify-center">Edit Profile</h2>
                <div>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-[13px]">First Name:</legend>
                        <input type="text" 
                        value={firstName} 
                        onChange={(e)=>setFirstName(e.target.value)} 
                        className="input" 
                        placeholder="Steve" 
                        />
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-[13px]">Last Name:</legend>
                        <input type="text"
                        value={lastName} 
                        onChange={(e)=>setLastName(e.target.value)}
                        className="input" 
                        placeholder="Doe"
                        />
                    </fieldset>
                    
                        <fieldset className="fieldset">
                        <legend className="fieldset-legend text-[13px]">Photo URL:</legend>
                        <input type="text"
                        value={photoURL} 
                        onChange={(e)=>setPhotoURL(e.target.value)}
                        className="input" 
                        placeholder="Enter Photo URL"
                        />
                    </fieldset>
                    
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-[13px]">Age:</legend>
                        <input type="text"
                        value={age} 
                        onChange={(e)=>setAge(e.target.value)}
                        className="input" 
                        placeholder="18"
                        />
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-[13px]">Gender:</legend>
                        <input type="text"
                        value={gender} 
                        onChange={(e)=>setGender(e.target.value)}
                        className="input" 
                        placeholder="Male"
                        />
                    </fieldset>
                    
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-[13px]">About:</legend>
                        <input type="text"
                        value={about} 
                        onChange={(e)=>setAbout(e.target.value)}
                        className="input" 
                        placeholder="Ambitious Goal Chaser"
                        />
                    </fieldset>
                </div>
                
                {error && <p className="text-red-500 m-1">{error}</p>}
                <div className="card-actions justify-center">
                  <button className="btn btn-primary" onClick={saveProfile}>Save Profile</button>
                </div>
            </div>
            </div>
        </div>

        <div className="flex justify-center mt-6 p-2">
            <UserCard userData={{firstName, lastName, photoURL, age, gender, about}}/>
        </div>
      </div>
    </>
  )
}

export default EditProfile;
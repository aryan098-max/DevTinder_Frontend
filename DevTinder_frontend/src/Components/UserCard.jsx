import axios from "axios";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";
import { BASE_URL } from "../utils/constants";

const UserCard = ({userData})=>{

    const dispatch = useDispatch();

    // destructuring user data 
    const {_id, firstName, lastName, age, gender, about, photoURL} = userData;

    // handling send request
    const handleSendRequest = async (status,_id)=>{

        try{
            await axios.post(BASE_URL + "/request/send/" + status + "/" + _id, {}, {withCredentials:true})
            // removing request from the feed, by passing the id
            dispatch(removeFeed(_id));

        } catch(err){
            console.error(err);
        }
    }

    return(
        <div>
            <div className="card bg-base-300 w-85 shadow-sm m-2 p-2">
                <figure>
                    <img
                    className="w-50 h-50 rounded-lg"
                    src={photoURL}
                    alt="profilePhoto" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{firstName + " " + lastName}</h2>
                    {age && gender && <p>{age + ", " + gender}</p>}
                    <p>{about}</p>

                    <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={()=>handleSendRequest("interested",_id)}>Interested</button>
                    <button className="btn btn-success" onClick={()=>handleSendRequest("ignore",_id)}>Ignore</button>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default UserCard;
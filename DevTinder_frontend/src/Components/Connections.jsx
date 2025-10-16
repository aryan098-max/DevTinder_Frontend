import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import {useDispatch, useSelector } from "react-redux";
import {addConnection} from "../utils/connectionSlice"

const Connections = ()=>{

    const dispatch = useDispatch();
    const connections = useSelector((store)=>store.connections);

    const fetchConnection = async ()=>{

        try{
            const response = await axios.get(BASE_URL + "/user/connections", {withCredentials:true})

            // dispatching an action to add connection to the redux store 
            dispatch(addConnection(response?.data?.data))

        } catch (err){
            console.error(err)
        }
    }

    useEffect(()=>{
        fetchConnection();
    },[])

    // connection data doesn't exist 
    if(!connections) return;

    if(connections.length === 0) return <h1 className="text-center font-bold text-2xl m-4">No Connections Found! Send Connection Requests to other people</h1>

   
    return(
        <div>
            <div className="text-center">
                <h1 className="font-bold text-2xl my-2">Connections</h1>
            </div>
            {
                connections.map((connection)=>{
                    const {_id, firstName, lastName, age, gender, about, photoURL} = connection;
                    return(
                        <div key={_id} className="m-4 p-4 flex rounded-lg bg-base-300 w-4/12 mx-auto">
                            <div>
                                <img alt="photo" className="w-20 h-20 rounded-full" src={photoURL}/>
                            </div>
                            <div className="mx-4 text-left"> 
                                <h1 className="font-bold text-xl">{firstName + " " + lastName}</h1>
                                <p>{age && gender && gender + " " + age}</p>
                                <p>{about}</p>
                            </div>
                           
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Connections;
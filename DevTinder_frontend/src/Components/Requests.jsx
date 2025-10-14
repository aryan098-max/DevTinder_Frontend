import axios from 'axios';
import {BASE_URL} from "../utils/constants";
import {useDispatch, useSelector} from "react-redux";
import {addRequest} from "../utils/requestSlice";
import { useEffect } from 'react';

const Requests = ()=>{

    const dispatch = useDispatch();

    // reading from the redux store 
    const requests = useSelector((store)=>store.requests)

    const fetchRequests = async()=>{

        try{
            const response = await axios.get(BASE_URL + "/user/requests/received",{withCredentials:true})

            // adding connection request to redux store 
             dispatch(addRequest(response?.data?.data));

        } catch (err){

            console.error(err);
        }
    }

    // always add dependecy array
    useEffect(()=>{

        fetchRequests();
    },[])


    // Adding conditionals for check
    if(!requests) return;

    if(requests.length === 0) return <h1 className='text-center font-bold m-2'>User hasn't received any requests!</h1>

    return(
        <div>
            <h1 className='text-center font-bold text-2xl m-2'>Connection Requests</h1>

            {
                requests.map((request)=>{
                      const {_id, firstName, lastName, age, gender, about, photoURL} = request.fromUserId;
                    return(
                        <div key={_id} className="m-4 p-4 flex justify-between items-center rounded-lg bg-base-300 w-5/12 mx-auto">
                            <div>
                                <img alt="photo" className="w-20 h-20 rounded-full" src={photoURL}/>
                            </div>
                            <div className="mx-4 text-left"> 
                                <h1 className="font-bold text-xl">{firstName + " " + lastName}</h1>
                                <p>{age && gender && gender + " " + age}</p>
                                <p>{about}</p>
                            </div>
                            <div className='flex'>
                                <button className="btn btn-primary mx-2">Accept</button>
                                <button className="btn btn-secondary">Reject</button>
                            </div>
                           
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Requests;
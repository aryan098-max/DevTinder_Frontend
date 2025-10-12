import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";


const Feed = () =>{

    const feed = useSelector((store)=> store.feed);
    const dispatch = useDispatch();

    const getFeed = async ()=>{
        try{
            const resposnse = await axios.get(BASE_URL + "/feed", {withCredentials:true});

            // adding response to redux store - create a feedSlice
            dispatch(addFeed(resposnse.data));

        } catch (err){
            console.error(err);
        }
    }

    // Initial page load useEffect() runs
    useEffect(()=>{

        // if feed doesn't exist make an api call
        if(!feed){
            getFeed();
        }

    },[])

    // console.log(feed?.data[0]);

    return(
        <div className="flex justify-center my-10">
            {
                feed.data.map((user)=> <UserCard userData={user}/>)
            }
        </div>
    )
}

export default Feed;
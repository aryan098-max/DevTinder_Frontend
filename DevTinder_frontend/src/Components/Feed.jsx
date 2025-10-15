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
            const response = await axios.get(BASE_URL + "/feed", {withCredentials:true});

            // adding response to redux store - create a feedSlice
            dispatch(addFeed(response?.data?.data));

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

    console.log(feed)

    // feed doesn't exist
    if(!feed) return;

    // All the users are either accepted or rejected
    if(feed.length === 0) return <h1 className="text-center font-bold text-2xl">Loading or no users in feed</h1>

    return(
        feed &&
        <div className="flex justify-center my-10">
            {
                // feed?.data.map((user, index)=> <UserCard key={index} userData={user}/>)
                <UserCard userData={feed[0]}/>
            }
        </div>
    )
}

export default Feed;
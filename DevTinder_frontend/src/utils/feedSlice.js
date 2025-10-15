import { createSlice } from "@reduxjs/toolkit";


const feedSlice = createSlice({

    name:"feed",
    initialState:null,

    // All the reducers are inside a single reducer
    reducers:{
        addFeed:(state, action)=>{
            return action.payload;
        },

        removeFeed:(state, action)=>{

            // state has access to all the users in the feed
            const newFeed = state.filter((r)=> r._id !== action.payload);
            return newFeed;
        }
    }
})

export const {addFeed, removeFeed} = feedSlice.actions;
export default feedSlice.reducer;
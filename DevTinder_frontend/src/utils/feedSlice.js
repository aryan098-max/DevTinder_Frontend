import { createSlice } from "@reduxjs/toolkit";


const feedSlice = createSlice({

    name:"feed",
    initialState:null,

    // All the reducers are inside a single reducer
    reducers:{
        addFeed:(state, action)=>{
            return action.payload;
        },

        removeFeed:()=>{
            return null;
        }
    }
})

export const {addFeed, removeFeed} = feedSlice.actions;
export default feedSlice.reducer;
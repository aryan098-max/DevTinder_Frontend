import {createSlice} from "@reduxjs/toolkit";


const requestSlice = createSlice({

    name:"requests",
    initialState:null, 
    reducers:{
        addRequest:(state,action)=>{
            return action.payload;
        },
        removeRequest:(state,action)=>{

            // returning true for the requests that doesn't come from removeRequest()
            // action.payload = _id 
            const newArray = state.filter((r)=> r._id !== action.payload);
            return newArray;
        }
    }
})

export const {addRequest, removeRequest} = requestSlice.actions;

export default requestSlice.reducer;
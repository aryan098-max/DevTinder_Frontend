import { createSlice } from "@reduxjs/toolkit";


const connectionSlice = createSlice({

    name:"connections",
    initialState:null, 
    reducers:{

        addConnection:(state,action)=>{
            return action.payload;
        },
        removeConnection:()=>{
            return null;
        }
    }
})

// exporting actions

export const{addConnection, removeConnection} = connectionSlice.actions;

// passing a reducer which contains all the reducers
export default connectionSlice.reducer;
import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({

    name:'user',
    initialState:null,
    reducers:{

        addUser:(state, action) => {
            return action.payload;
        },
        removeUser:() =>{
            return null;
        }
    }
})

// exporting actions from actions - all the keys are automatically generated as actions by redux
export const {addUser, removeUser} = userSlice.actions;

// exporting a reducer - a big contianer - which contains all the reducers
export default userSlice.reducer;
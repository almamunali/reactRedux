import { createSlice } from "@reduxjs/toolkit";

const UserSlice=createSlice({
    name:"userAllData",
    initialState:{userName:"",userAge:"",userAddress:""},
    reducers:{
        InputText:(state,action)=>{
            state.userName=action.payload
        },
        InputAge:(state,action)=>{
            state.userAge=action.payload
        },
        InputAddress:(state,action)=>{
           state.userAddress=action.payload
        }
    }
})

 export const UserAction=UserSlice.actions;
export const UserReducer=UserSlice.reducer;





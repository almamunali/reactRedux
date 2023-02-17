import { createSlice } from "@reduxjs/toolkit";

const CounterSlice =createSlice({
    name:"CounterData",
    initialState:{count:0},
    reducers:{
        Increment(state,action){
            state.count += 1 ;
        },
        Decrement(state,action){
            state.count -=1;
        },
        AddByAmount(state,action){
            state.count +=action.payload
        }
    }
    
})

export const CounterAction =CounterSlice.actions;
export const CounterReducer =CounterSlice.reducer
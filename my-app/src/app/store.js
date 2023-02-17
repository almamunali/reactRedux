import { configureStore } from '@reduxjs/toolkit';
import {UserReducer} from "../features/UserSlice/userSlice"
import { CounterReducer } from '../features/Counter/CounterSlice';

export const store = configureStore({
  reducer: {
    newData:UserReducer,
    newCount:CounterReducer,
    
  },
});

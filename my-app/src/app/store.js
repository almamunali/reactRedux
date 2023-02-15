import { configureStore } from '@reduxjs/toolkit';
import {UserReducer} from "../features/UserSlice/userSlice"

export const store = configureStore({
  reducer: {
    newData:UserReducer
  },
});

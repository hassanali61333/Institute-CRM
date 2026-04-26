import { configureStore } from "@reduxjs/toolkit";
import myreducer from './Coursesslice.js'

export const store = configureStore({
    reducer:{
        courses : myreducer,
      
    }
})
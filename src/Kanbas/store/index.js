import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/ModulesList/modulesReducer";


const store = configureStore({
  reducer: {
    modulesReducer,
  }
});


export default store;
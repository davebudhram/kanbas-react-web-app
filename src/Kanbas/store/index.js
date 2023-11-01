import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/ModulesList/modulesReducer";
import assignmentsReducer from "../Courses/Assignments/assignmentsReducer";


const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer
  }
});


export default store;
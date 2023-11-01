import { createSlice } from "@reduxjs/toolkit";

import db from "../../Database";


const initialState = {
  assignments: db.assignments,
  assignment: {
    courseId: "",
    name: "hi",
    dueDate: ""
  },
};


const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
        { ...action.payload, _id: new Date().getTime().toString() },
        ...state.assignments,
      ];
    },
  },
});


export const { addAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
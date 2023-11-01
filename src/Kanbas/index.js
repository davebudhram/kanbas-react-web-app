import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import './style.css'
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const [courses, setCourses] = useState(db.courses);

  const [course, setCourse] = useState({
    name: "",
    number: "",
    startDate: "",
    endDate: "",
  });

  //Adds a course with the entered fields
  const addNewCourse = () => {
    setCourses([

      ...courses,
      {
        ...course,
        _id: new Date().getTime().toString(),
      },
    ]);
    setCourse({
      name: "",
      number: "",
      startDate: "",
      endDate: "",
    });
  };

  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };


  // Deletes a course with the given courseId
  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  return (
    <Provider store={store}>

      <div className="d-flex flex-row">
        <KanbasNavigation />
        <div className="page">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={<Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse} />
            } />
            <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />

          </Routes>
        </div>


      </div>
    </Provider>
  );
}
export default Kanbas;
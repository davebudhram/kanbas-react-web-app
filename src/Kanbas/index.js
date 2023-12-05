import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import './style.css'
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import Signin from "./Users/signin";
import Account from "./Users/account";
import UserTable from "./Users/table";
import Signup from "./Users/signup";

function Kanbas() {
  const API_BASE = process.env.REACT_APP_API_BASE || 'https://kanbas-node-server-app-rmdp.onrender.com/api';
  const URL = `${API_BASE}/courses`;
  const [courses, setCourses] = useState([]);

  const [course, setCourse] = useState({
    _id: "",
    name: "",
    number: "",
    startDate: "",
    endDate: "",
  });

  /**
   * Adds a new course to the backend
   */
  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      ...courses,
      response.data,
    ]);
    setCourse({
      name: "",
      number: "",
      startDate: "",
      endDate: "",
    });
  };

  const updateCourse = async () => {
    console.log(course);
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return response.data;
        }
        return c;
      })
    );
  };


  /**
   * Deletes a course with the given ID
   * @param courseID 
   */
  const deleteCourse = async (courseID) => {
    await axios.delete(
      `${URL}/${courseID}`
    );
    setCourses(courses.filter(
      (c) => c._id !== courseID));
  };








  useEffect(() => {
    /**
  * Gets and sets all the courses from backend
  */
    const findAllCourses = async () => {
      const response = await axios.get(URL);
      setCourses(response.data);
    };
    findAllCourses();
  }, [URL]);


  return (
    <Provider store={store}>

      <div className="d-flex flex-row">
        <KanbasNavigation />
        <div className="page">
          <Routes>
            <Route path="/" element={<Navigate to="Signin" />} />
            <Route path="Account" element={<Account />} />
            <Route path="/Account/:id" element={<Account />} />
            <Route path="Dashboard" element={<Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse} />
            } />
            <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
            <Route path="Signin" element={<Signin />} />
            <Route path="Signup" element={<Signup />} />

            <Route path="/admin/users" element={<UserTable />} />

          </Routes>
        </div>


      </div>
    </Provider>
  );
}
export default Kanbas;
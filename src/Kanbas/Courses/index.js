import db from "../../Kanbas/Database";
import { Link, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faGlasses } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import Home from "./Home";
import { useState, useEffect } from "react";
import axios from "axios";
import './style.css'


function Courses() {
  const API_BASE = process.env.REACT_APP_API_BASE || 'https://kanbas-node-server-app-rmdp.onrender.com/api';
  const URL = `${API_BASE}/courses`;
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const [assignments, setAssignments] = useState({});
  const request = axios.create({
    withCredentials: true,
  });
  const findCourseById = async (courseId) => {
    const response = await request.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };

  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);


  const barsStyle = {
    'fontSize': '30px'
  }

  const path = useLocation().pathname

  const myArray = path.split("/");

  return (
    <>
      <div className="page-header">

        <FontAwesomeIcon icon={faBars} className="red-icon ms-1 me-4" style={barsStyle} />
        <nav aria-label="breadcrumb" className="mt-3 breadcrumb-nav">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="text-red">
                {course.name}
              </Link>
            </li>
            {(path.includes('Modules') || path.includes('Home')) &&
              <li className="breadcrumb-item active">
                Modules
              </li>}
            {(path.includes('Grade')) &&
              <li className="breadcrumb-item active">
                Grades
              </li>}
            {path.includes('Assignments') && (myArray.length !== 6) &&
              <li className="breadcrumb-item active">
                Assignments
              </li>}
            {path.includes('Assignments') && (myArray.length === 6) &&
              <>
                <li className="breadcrumb-item active">
                  <Link key={course._id} to={`/Kanbas/Courses/${course._id}/Assignments`} className="text-red">
                    Assignments
                  </Link>
                </li>
                <li className="breadcrumb-item active">
                  {db.assignments.find((assignment) => (assignment.courseId === courseId && assignment._id === myArray[5])).name}
                </li>
              </>

            }

          </ol>
        </nav>
        <button type="button" className="btn btn-secondary ms-auto">
          <FontAwesomeIcon icon={faGlasses} className="me-1" />
          Student View
        </button>
      </div >
      <hr />
      <div className="d-flex flex-row">
        <CourseNavigation />

        <div className="page-body">
          <Routes>

            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
export default Courses;
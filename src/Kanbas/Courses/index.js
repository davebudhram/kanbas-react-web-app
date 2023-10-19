import db from "../../Kanbas/Database";
import { Link, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faGlasses } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Home from "./Home";
import './style.css'


function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  const barsStyle = {
    'font-size': '30px'
  }

  const path = useLocation().pathname
  console.log(path)
  const myArray = path.split("/");
  console.log(myArray)

  return (
    <>
      <div className="page-header">

        <FontAwesomeIcon icon={faBars} className="red-icon ms-1 me-4" style={barsStyle} />
        <nav aria-label="breadcrumb" className="mt-3 breadcrumb-nav">
          <ol class="breadcrumb">
            <li className="breadcrumb-item">
              <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="text-red">
                {course.name}
              </Link>
            </li>
            {(path.includes('Modules') || path.includes('Home')) &&
              <li className="breadcrumb-item active">
                Modules
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
        <button type="button" class="btn btn-secondary ms-auto" onclick="">
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
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </>
  );
}
export default Courses;
import { Link } from "react-router-dom";
import db from "../Database";
import './style.css' // Stylesheet for this component
export default function Dashboard() {
  const courses = db.courses;

  console.log(courses);
  return (
    <>

      <div className="page-header dashboard-header-text ">
        Dashboard
      </div>
      <hr />
      <div className="page-body">
        <div className="published-courses-text">Published Courses ({courses.length})</div>
        <hr />
        <div className="dashboard-body d-flex flex-row flex-wrap">
          {courses.map(course => (
            <div className="card card-container">
              <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
                <div>
                  <img src={"../../images/courses_background.jpeg"}
                    className="card-img-top card-image" alt="..." />
                </div>
              </Link>
              <div class="card-body card-body-container">
                <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
                  <div class="card-title card-title-text">{course.name}</div>
                  <div class="card-text card-description-section">
                    {course.number}
                  </div>
                  <div class="card-text card-description-term">
                    {course.term}
                  </div>
                </Link>
              </div>
            </div>


          ))}
        </div>
      </div>



    </>
  )
}
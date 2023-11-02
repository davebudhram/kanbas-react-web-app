import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./style.css"; // Stylesheet for this component
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
export default function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }
) {
  const [addUpdate, setAddUpdate] = useState(false); // true if updating, false if adding

  return (
    <>
      <div className='page-header dashboard-header-text '>Dashboard</div>
      <hr />
      <div className='page-body'>
        <div>
          <div className="modal fade" id="addUpdateCourseModal" tabindex="-1" aria-labelledby="addUpdateCourseModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="addUpdateCourseModalLabel">Add/Edit Course</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div className='form-group'>
                    <label for="courseName" className="mb-1">Course Name</label>
                    <input
                      id="courseName"
                      type='text'
                      className='form-control mb-2'
                      value={course.name}
                      placeholder='Enter Course Name'
                      onChange={(e) => setCourse({ ...course, name: e.target.value })}
                    />
                    <label for="courseNumber" className="mb-1">Course Number</label>
                    <input
                      id="courseNumber"
                      type='text'
                      className='form-control  mb-2'
                      value={course.number}
                      placeholder='Enter Course Number'
                      onChange={(e) => setCourse({ ...course, number: e.target.value })}
                    />
                    <label for="startDate" className="mb-1">Start Date</label>
                    <input
                      id="startDate"
                      type='date'
                      className='form-control mb-2'
                      value={course.startDate}
                      placeholder='Enter Course Start Date'
                      onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
                    />
                    <label for="endDate" className="mb-1">End Date</label>
                    <input
                      id="endDate"
                      type='date'
                      className='form-control  mb-2'
                      value={course.endDate}
                      placeholder='Enter Course End Date'
                      onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
                    />

                  </div>
                </div>
                <div className="modal-footer">
                  {addUpdate && <button
                    type='submit'
                    onClick={(e) => updateCourse()}
                    className='btn btn-primary'
                    data-bs-dismiss="modal"
                  >
                    Update
                  </button>}
                  {!addUpdate && <button
                    type='submit'
                    onClick={(e) => addNewCourse()}
                    className='btn btn-primary'
                    data-bs-dismiss="modal"
                  >
                    Add
                  </button>}

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='published-courses-text d-flex flex-row mb-2'>
          Published Courses ({courses.length})
          <button type="button" className="btn btn-secondary ms-auto me-2" data-bs-toggle="modal" data-bs-target="#addUpdateCourseModal" onClick={() => setAddUpdate(false)}>
            Add
            <FontAwesomeIcon icon={faPlus} className="ms-1" />
          </button>

        </div>
        <hr />
        <div className='dashboard-body d-flex flex-row flex-wrap'>
          {courses.map((course) => (
            <div className='card card-container'>

              <div>
                <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
                  <img
                    src={"../../images/courses_background.jpeg"}
                    className='card-img-top card-image'
                    alt='...'
                  />
                </Link>
                <div className="dropdown position-absolute top-0 end-0 mt-3 me-3">
                  <button className="btn btn-secondary dropright text-nowrap" type="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon icon={faEllipsisV} />
                  </button>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item btn" data-bs-toggle="modal" data-bs-target="#addUpdateCourseModal" onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                      setAddUpdate(true);
                    }} >Edit</li>
                    <li className="dropdown-item" onClick={() => deleteCourse(course._id)}>Delete</li>
                  </ul>
                </div>
              </div>

              <div className='card-body card-body-container'>
                <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
                  <div className='card-title card-title-text'>{course.name}</div>
                  <div className='card-text card-description-section'>
                    {course.number}
                  </div>
                  <div className='card-text card-description-term'>
                    {course.term}
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div >
    </>
  );
}

import React from "react";
import { Link, useParams } from "react-router-dom";
import Database from "../../Database";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCircleCheck, faEllipsisV, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import './style.css'

export default function Assignments() {
  library.add(faPlus, faCircleCheck, faEllipsisV, faPenToSquare)
  const { courseId } = useParams();
  const assignments = Database.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.courseId === courseId);

  return (
    <>
      <div className="d-flex flex-row mb-3">
        <input type="text"
          class="form-control w-25"
          id="assignment-search"
          placeholder="Search for assignments" />
        <button type="button" class="btn btn-secondary ms-auto me-2" onclick="">
          <FontAwesomeIcon icon={faPlus} className="me-2" /> Group
        </button>
        <Link to={`/Kanbas/Courses/${courseId}/Assignments/`}
          className="btn btn-danger me-2">
          <FontAwesomeIcon icon={faPlus} className="me-2" /> Assignment
        </Link>
        <button type="button" class="btn btn-secondary" onclick="">
          <FontAwesomeIcon icon={faEllipsisV} className="" />
        </button>
      </div>
      <ul className="list-group">
        <li className="list-group-item d-flex flex-row align-items-center border-0 gray-background">
          <FontAwesomeIcon icon={faEllipsisV} className="ms-1 me-1" />
          <FontAwesomeIcon icon={faEllipsisV} className="me-3" />
          Assignments
          <div class="border border-dark rounded-pill ms-auto me-2 p-1">
            40% of total
          </div>
          <FontAwesomeIcon icon={faPlus} className="me-2" />
          <FontAwesomeIcon icon={faEllipsisV} className="me-3" />
        </li>
        {courseAssignments.map((assignment, index) => (
          <li className="list-group-item d-flex flex-row align-items-center green-left-border">
            <FontAwesomeIcon icon={faEllipsisV} className="me-1" />
            <FontAwesomeIcon icon={faEllipsisV} className="me-3" />
            <Link
              key={assignment._id}
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
              <FontAwesomeIcon icon={faPenToSquare} className="me-3  assignment-icon" />
            </Link>
            <div className="d-flex flex-column">
              <Link
                key={assignment._id}
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                <div className="assignment-title">{assignment.name}</div>
              </Link>
              <div className="assignment-module ">{ }</div>
              <div className="assignment-due-date"><strong>Due: </strong>{assignment.dueDate}</div>
            </div>
            <FontAwesomeIcon icon={faCircleCheck} className="ms-auto me-3 fa-circle-check" />
            <FontAwesomeIcon icon={faEllipsisV} className="me-3" />
          </li>
        ))}
      </ul>
    </>)
}
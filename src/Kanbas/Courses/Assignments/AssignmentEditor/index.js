import React from "react";
import { useParams, Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import "./style.css"
import { useSelector, useDispatch } from "react-redux";
import { addAssignment } from "../assignmentsReducer";
export default function AssignmentEditor({ addOrEdit }) {
  library.add(faCircleCheck, faEllipsisV);
  const dispatch = useDispatch();

  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const { courseId } = useParams();
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  // const assignment = assignments.find(
  //   (assignment) => assignment._id === assignmentId);

  function handleSave() {
    dispatch(addAssignment({}))
  }

  return (
    <>
      <div className="d-flex flex-row justify-content-end align-items-center mb-3">
        <div className="me-3">
          <FontAwesomeIcon icon="check-circle" className="green-check me-1" />
          Published
        </div>
        <button type="button" className="btn btn-secondary" onclick>
          <FontAwesomeIcon icon="ellipsis-vertical" />
        </button>
      </div>
      <hr className="mb-3" />
      <div className="d-flex flex-column mb-3">
        <label for="assignment-name"
          class="form-label">
          Assignment Name</label>
        <input type="text"
          className="form-control mb-4"
          id="assignment-name"
          placeholder="Enter assignment name" value={assignment.name} />
      </div>
      <hr className="mb-3" />
      <div className="d-flex flex-row justify-content-end">
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn btn-secondary me-2">
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-danger me-2">
          Save
        </button>
      </div>

    </>)
}
import Database from '../../Database';
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImport, faFileExport, faGear, faFilter } from "@fortawesome/free-solid-svg-icons";
import './style.css'



export default function Grades() {
  const { courseId } = useParams();
  const grades = Database.grades.filter((grade) => grade.course === courseId);
  const assignments = Database.assignments.filter((assignment) => assignment.courseId === courseId);
  const enrollments = Database.enrollments.filter((enrollment) => enrollment.course === courseId);
  const users = Database.users;
  return (<>
    <div class="d-flex flex-row">
      <button type="button" class="btn btn-secondary ms-auto me-2">
        <FontAwesomeIcon icon={faFileImport} />
        Import
      </button>
      <button type="button" class="btn btn-secondary me-2">
        <FontAwesomeIcon icon={faFileExport} />
        Export
      </button>
      <button type="button" class="btn btn-secondary">
        <FontAwesomeIcon icon={faGear} />
      </button>
    </div>
    <div class="row mt-3">
      <div class="col me-1">
        <label for="student-name-search"
          class="form-label fw-bold">
          Student Names</label>
        <input type="text"
          class="form-control"
          id="student-name-search"
          placeholder="Search Students" />
      </div>
      <div class="col ms-1">
        <label for="assignment-name-search"
          class="form-label fw-bold">
          Assignment Names</label>
        <input type="text"
          class="form-control"
          id="assignment-name-search"
          placeholder="Search Assignments" />
      </div>
    </div>
    <div class="mt-3">
      <button type="button" class="btn btn-secondary">
        <FontAwesomeIcon icon={faFilter} />
        Apply Filters
      </button>
    </div>
    <div class="mt-3 table-responsive border border-secondary-1">
      <table class="table table-striped table-bordered grades-table">
        <thead>
          <tr class="text-center text-nowrap">
            <th scope="col" class="pe-5 text-start">Student Name</th>
            {assignments.map(assignment => (

              <th scope="col">
                <div>{assignment.name}</div>
                <div>Out of 100</div>
              </th>))}



          </tr>
        </thead>
        <tbody class="text-center">
          {enrollments.map(enrollment => {
            const user = users.find((user) => user._id === enrollment.user);

            return (
              <tr>
                <td class="text-start">{user.firstName} {user.lastName}</td>
                {assignments.map((assignment) => {
                  const grade = grades.find(
                    (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                  return (<td>{grade?.grade || ""}</td>);

                })}

              </tr>)
          })}
        </tbody>
      </table>
    </div>
  </>);
}
import React from "react";
import { useParams } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCircleCheck, faEllipsisV, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import db from "../../../Database";
import './style.css'

function ModuleList() {
  library.add(faPlus, faCircleCheck, faEllipsisV, faPenToSquare);
  const { courseId } = useParams();
  const modules = db.modules.filter((module) => module.courseId === courseId);
  return (
    <div className="module">
      {modules.map((module, index) => (
        <ul className="list-group mb-3 mt-0 ps-0">
          <li key={index} className="list-group-item d-flex flex-row align-items-center p-3 gray-background ">
            <FontAwesomeIcon icon={faEllipsisV} className="ms-1 me-1" />
            <FontAwesomeIcon icon={faEllipsisV} className="me-3" />
            {module.name}
            <FontAwesomeIcon icon={faCircleCheck} className="ms-auto me-2 fa-circle-check" />
            <FontAwesomeIcon icon={faPlus} className="me-2" />
            <FontAwesomeIcon icon={faEllipsisV} className="me-3" />
          </li>
          {module.links.map((link, index) => (
            <li key={index} className="list-group-item d-flex flex-row align-items-center p-3 green-left-border">
              <FontAwesomeIcon icon={faEllipsisV} className="ms-1 me-1" />
              <FontAwesomeIcon icon={faEllipsisV} className="me-3" />
              {link}
              <FontAwesomeIcon icon={faCircleCheck} className="ms-auto me-2 fa-circle-check" />
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              <FontAwesomeIcon icon={faEllipsisV} className="me-3" />
            </li>
          ))
          }
        </ul>
      ))}
    </div>

  );
}
export default ModuleList;
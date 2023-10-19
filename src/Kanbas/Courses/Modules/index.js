import ModuleList from "./ModulesList";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCircleCheck, faEllipsisV, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
export default function Modules() {
  return (
    <div>
      <div class="d-flex flex-row justify-content-end mb-3">
        <button type="button" class="btn btn-secondary me-1 text-nowrap" onclick>
          Collapse All
        </button>
        <button type="button" class="btn btn-secondary me-1 text-nowrap" onclick>
          View Progress
        </button>
        <div class="dropdown me-1">
          <button class="btn btn-secondary dropdown-toggle text-nowrap" type="button"
            data-bs-toggle="dropdown" aria-expanded="false">
            <FontAwesomeIcon icon={faCircleCheck} className="ms-1 me-1" />
            Publish
          </button>
          <ul class="dropdown-menu">
            <li className="dropdown-item">Action</li>
            <li className="dropdown-item">Another action</li>
            <li className="dropdown-item">Something else here</li>
          </ul>
        </div>

        <button type="button" class="btn btn-danger me-1 text-nowrap" onclick>
          <FontAwesomeIcon icon={faPlus} className="ms-1 me-1" />
          Module
        </button>
        <button type="button" class="btn btn-secondary text-nowrap" onclick>
          <FontAwesomeIcon icon={faEllipsisV} className="ms-1 me-1" />
        </button>
      </div>
      <hr className="mb-3" />
      <ModuleList />
    </div>
  );
}
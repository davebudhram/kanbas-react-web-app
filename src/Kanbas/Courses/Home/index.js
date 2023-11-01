import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faFileImport, faArrowsToCircle, faChartColumn, faBullhorn, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faXmarkCircle, faBell, faCalendar } from "@fortawesome/free-regular-svg-icons";
import Modules from "../Modules";
import './style.css'

export default function Home() {
  library.add(faXmarkCircle, faCircleCheck, faFileImport, faArrowsToCircle, faChartColumn, faBullhorn, faBell, faXmark);
  const black = {
    "color": "black"
  }

  return (
    <div className='d-flex flex-row'>
      <div className="page-body-inner flex-fill">
        <Modules />
      </div>
      <div className="right-sidebar">
        <div className="d-flex flex-column">
          <div>Course Status</div>
          <div className="d-flex flex-row mb-3 ">
            <button type="button" className="btn btn-secondary flex-fill" >
              <FontAwesomeIcon icon="fa-regular fa-circle-xmark" className='me-2' />
              Unpublish
            </button>
            <button type="button" className="btn btn-success flex-fill" disabled >
              <FontAwesomeIcon icon={faCircleCheck} style={black} className='me-2' />
              Published
            </button>
          </div>
          <button type="button" className="btn btn-secondary text-start mt-2 mb-1 " >
            <FontAwesomeIcon icon={faFileImport} className='me-2 ' />
            Import Existing Content
          </button>
          <button type="button" className="btn btn-secondary text-start mb-1" >
            <FontAwesomeIcon icon={faFileImport} className='me-2 ' />
            Import From Commons
          </button>
          <button type="button" className="btn btn-secondary text-start mb-1" >
            <FontAwesomeIcon icon={faArrowsToCircle} className='me-2 ' />
            Choose Home Page
          </button>
          <button type="button" className="btn btn-secondary text-start mb-1" >
            <FontAwesomeIcon icon={faChartColumn} className='me-2 ' />
            View Course Stream
          </button>
          <button type="button" className="btn btn-secondary text-start mb-1" >
            <FontAwesomeIcon icon={faBullhorn} className='me-2 ' />
            New Announcement
          </button>
          <button type="button" className="btn btn-secondary text-start mb-1" >
            <FontAwesomeIcon icon={faChartColumn} className='me-2 ' />
            New Analytics
          </button>
          <button type="button" className="btn btn-secondary text-start mb-1" >
            <FontAwesomeIcon icon={faBell} className='me-2 ' />
            New Course Notifications
          </button>
          <div>
            <div className="mt-3">
              To Do
            </div>
            <hr className="mt-0" />
            <div className=" mt-2 to-do-item d-flex flex-row">
              <div className="to-do-number ms-2">1</div>
              <div className="d-flex flex-column ms-2">
                <div className="font-size-12 text-red">
                  Grade A1 - ENV + HTML
                </div>
                <div className="text-secondary to-do-item-date">
                  100 points &middot; Sept 18th @ 11:59pm
                </div>
              </div>
              <FontAwesomeIcon icon={faXmark} className='to-do-item-x ' />
            </div>
          </div>
          <div>
            <div className="d-flex flex-row align-items-center mt-3">
              Coming up
              <i className="fa-regular fa-calendar ms-auto me-1"></i>
              <FontAwesomeIcon icon={faCalendar} />
              <Link className='text-red ms-1'>
                View Calendar
              </Link>


            </div>
            <hr />

            <div className="d-flex flex-row mt-2">
              <FontAwesomeIcon icon={faCalendar} className='me-3' />
              <Link className='text-red ms-1'>
                <div className="d-flex flex-column">
                  <div className="font-size-12 text-red">Lecture</div>
                  <div className="font-size-12 text-gray">CS4550.12631.202410</div>
                  <div className="font-size-12  text-gray">Sept 11th @11:45am</div>
                </div>
              </Link>


            </div>
            <div className="d-flex flex-row mt-2">
              <FontAwesomeIcon icon={faCalendar} className='me-3' />
              <Link className='text-red ms-1'>
                <div className="d-flex flex-column">
                  <div className="font-size-12 text-red">Lecture</div>
                  <div className="font-size-12 text-gray">CS4550.12631.202410</div>
                  <div className="font-size-12  text-gray">Sept 11th @11:45am</div>
                </div>
              </Link>


            </div>
            <div className="d-flex flex-row mt-2">
              <FontAwesomeIcon icon={faCalendar} className='me-3' />
              <Link className='text-red ms-1'>
                <div className="d-flex flex-column">
                  <div className="font-size-12 text-red">Lecture</div>
                  <div className="font-size-12 text-gray">CS4550.12631.202410</div>
                  <div className="font-size-12  text-gray">Sept 11th @11:45am</div>
                </div>
              </Link>


            </div>

            <Link className='text-red ms-1 font-size-12'>
              12 more in the next week
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
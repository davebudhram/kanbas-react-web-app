import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCircleCheck, faEllipsisV, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

import './style.css'

function ModuleList() {
  library.add(faPlus, faCircleCheck, faEllipsisV, faPenToSquare);
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const [modalState, setModalState] = useState('addModuleTitle');
  const [link, setLink] = useState('')
  const [linkIndex, setLinkIndex] = useState(-1)
  const dispatch = useDispatch();

  function updateLink() {
    dispatch(updateModule({
      ...module, links: module.links.map((value, index) => {
        if (index === linkIndex) {
          return link
        } else {
          return value
        }
      })
    }))
  }

  // function deleteLink() {
  //   dispatch(updateModule({ ...module, links: module.links.filter((value, index) => index !== linkIndex) }));
  // }
  return (
    <>
      <div className="modal fade" id="addEditModule" tabIndex="-1" aria-labelledby="addEditModuleLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addEditModuleLabel">Add/Edit Module</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {(modalState === 'addModuleTitle' || modalState === 'updateModuleTitle') &&
                <div>
                  <label htmlFor="moduleName" className="mb-1">Module Name</label>
                  <input
                    id="moduleName"
                    type='text'
                    className='form-control mb-2'
                    value={module.name}
                    placeholder='Enter Module Name'
                    onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                  />
                </div>
              }
              {(modalState === 'addModuleLink' || modalState === 'updateModuleLink') &&
                <div>
                  <label htmlFor="moduleLink" className="mb-1">Module Link</label>
                  <input
                    id="moduleLink"
                    type='text'
                    className='form-control mb-2'
                    value={link}
                    placeholder='Enter Link'
                    onChange={(e) => setLink(e.target.value)}
                  />
                </div>
              }
            </div>
            <div className="modal-footer">
              {modalState === 'addModuleTitle' && <button
                type='submit'
                onClick={() => dispatch(addModule({ ...module, courseId: courseId }))}
                className='btn btn-primary'
                data-bs-dismiss="modal"
              >
                Add
              </button>
              }
              {modalState === 'updateModuleTitle' && <button
                type='submit'
                onClick={() => dispatch(updateModule(module))}
                className='btn btn-primary'
                data-bs-dismiss="modal"
              >
                Update
              </button>
              }
              {modalState === 'addModuleLink' && <button
                type='submit'
                onClick={(e) => { dispatch(updateModule({ ...module, links: [...module.links, link] })); setLink(""); setLinkIndex(-1) }}
                className='btn btn-primary'
                data-bs-dismiss="modal"
              >
                Add
              </button>
              }
              {modalState === 'updateModuleLink' && <button
                type='submit'
                onClick={() => updateLink()}
                className='btn btn-primary'
                data-bs-dismiss="modal"
              >
                Update
              </button>
              }


            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-end mb-3">
        <button type="button" className="btn btn-secondary me-1 text-nowrap">
          Collapse All
        </button>
        <button type="button" className="btn btn-secondary me-1 text-nowrap">
          View Progress
        </button>
        <div className="dropdown me-1">
          <button className="btn btn-secondary dropdown-toggle text-nowrap" type="button"
            data-bs-toggle="dropdown" aria-expanded="false">
            <FontAwesomeIcon icon={faCircleCheck} className="ms-1 me-1" />
            Publish
          </button>
          {/* <ul className="dropdown-menu">
            <li className="dropdown-item" key="1">Action</li>
            <li className="dropdown-item" key="2">Another action</li>
            <li className="dropdown-item" key="3">Something else here</li>
          </ul> */}
        </div>

        <button type="button" className="btn btn-danger me-1 text-nowrap" data-bs-toggle="modal" data-bs-target="#addEditModule" onClick={() => {
          dispatch(setModule({ name: "", links: [] }));
          setModalState('addModuleTitle');
        }
        }>
          <FontAwesomeIcon icon={faPlus} className="ms-1 me-1" />
          Module

        </button>
        <button type="button" className="btn btn-secondary text-nowrap">
          <FontAwesomeIcon icon={faEllipsisV} className="ms-1 me-1" />
        </button>
      </div>
      <hr className="mb-3" />

      <div className="module">
        {modules.filter(module => module.courseId === courseId).map((module, index) => (
          <ul key={module._id} className="list-group mb-3 mt-0 ps-0">
            <li key={index} className="list-group-item d-flex flex-row align-items-center p-3 gray-background ">
              <FontAwesomeIcon icon={faEllipsisV} className="ms-1 me-1" />
              <FontAwesomeIcon icon={faEllipsisV} className="me-3" />
              {module.name}
              <FontAwesomeIcon icon={faCircleCheck} className="ms-auto me-2 fa-circle-check" />
              <FontAwesomeIcon icon={faPlus} className="me-2 plus-cursor" data-bs-toggle="modal" data-bs-target="#addEditModule" onClick={() => {
                setModalState('addModuleLink');
                setLink('');
                setLinkIndex(-1);
                dispatch(setModule(module));
              }} />

              <FontAwesomeIcon icon={faEllipsisV} className="dropright text-nowrap cursor-pointer me-3" data-bs-toggle="dropdown" aria-expanded="false" />

              <ul className="dropdown-menu">
                <li className="dropdown-item" data-bs-toggle="modal" data-bs-target="#addEditModule" onClick={() => {
                  setModalState('updateModuleTitle')
                  dispatch(setModule(module));
                }} >Edit</li>
                <li className="dropdown-item" onClick={() => dispatch(deleteModule(module._id))}>Delete</li>
              </ul>
            </li>
            {module.links.map((link, index2) => (
              <li key={index + index2 + 1} className="list-group-item d-flex flex-row align-items-center p-3 green-left-border">
                <FontAwesomeIcon icon={faEllipsisV} className="ms-1 me-1" />
                <FontAwesomeIcon icon={faEllipsisV} className="me-3" />
                {link}
                <FontAwesomeIcon icon={faCircleCheck} className="ms-auto me-2 fa-circle-check" />
                <FontAwesomeIcon icon={faPlus} className="me-2" />
                <FontAwesomeIcon icon={faEllipsisV} className="dropright text-nowrap cursor-pointer me-3" data-bs-toggle="dropdown" aria-expanded="false" />

                <ul className="dropdown-menu">
                  <li className="dropdown-item" data-bs-toggle="modal" data-bs-target="#addEditModule" onClick={() => {
                    setModalState('updateModuleLink')
                    setLinkIndex(index2);
                    setLink(link);
                    dispatch(setModule(module));
                  }} >Edit</li>

                  <li className="dropdown-item" onClick={() => { dispatch(updateModule({ ...module, links: module.links.filter((value, i) => i !== index2) })) }}>Delete</li>
                </ul>
              </li>
            ))
            }
          </ul>

        ))}
      </div>
    </>
  );
}
export default ModuleList;
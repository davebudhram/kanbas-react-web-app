import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE || 'https://kanbas-node-server-app-rmdp.onrender.com/api';
const MODULES_URL = `${API_BASE}/modules`;
const COURSES_URL = `${API_BASE}/courses`;

const request = axios.create({
  withCredentials: true,
});

/**
 * 
 * @param  courseId 
 * @returns 
 */
export const findModulesForCourse = async (courseId) => {
  const response = await request.get(`${COURSES_URL}/${courseId}/modules`);
  return response.data;
};

/**
 * Creates a module for the given course
 * @param {*} courseId 
 * @param {*} module 
 * @returns 
 */
export const createModule = async (courseId, module) => {
  console.log('here')
  console.log(courseId)
  const response = await request.post(
    `${COURSES_URL}/${courseId}/modules`,
    module
  );
  return response.data;
};

/**
 * Deletes a module witht the given module id
 * @param {*} moduleId 
 * @returns 
 */
export const deleteModule = async (moduleId) => {
  const response = await request
    .delete(`${MODULES_URL}/${moduleId}`);
  return response.data;
};

/**
 * Updates a module 
 * @param {} module 
 * @returns 
 */
export const updateModule = async (module) => {
  const response = await request.put(`${MODULES_URL}/${module._id}`, module);
  return response.data;
};





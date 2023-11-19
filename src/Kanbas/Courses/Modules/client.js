import axios from "axios";

const COURSES_URL = "https://kanbas-node-server-app-cs1234-sp23.onrender.com/api/courses";
const MODULES_URL = 'https://kanbas-node-server-app-cs1234-sp23.onrender.com/api/modules';
/**
 * 
 * @param  courseId 
 * @returns 
 */
export const findModulesForCourse = async (courseId) => {
  const response = await axios.get(`${COURSES_URL}/${courseId}/modules`);
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
  const response = await axios.post(
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
  const response = await axios
    .delete(`${MODULES_URL}/${moduleId}`);
  return response.data;
};

/**
 * Updates a module 
 * @param {} module 
 * @returns 
 */
export const updateModule = async (module) => {
  const response = await axios.put(`${MODULES_URL}/${module._id}`, module);
  return response.data;
};





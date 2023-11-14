
import React, { useState, useEffect } from "react";
import axios from "axios";
function WorkingWithArrays() {
  const API = "http://localhost:4000/a5/todos";
  const [todo, setTodo] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09", completed: false,
  });

  const [todos, setTodos] = useState([]);
  const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
  };

  const removeTodo = async (todo) => {
    const response = await axios
      .get(`${API}/${todo.id}/delete`);
    setTodos(response.data);
  };

  const createTodo = async () => {
    const response = await axios.get(`${API}/create`);
    setTodos(response.data);
  };

  const fetchTodoById = async (id) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };


  const updateTitle = async () => {
    const response = await axios.get(
      `${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };

  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };

  const deleteTodo = async (todo) => {
    const response = await axios.delete(`${API}/${todo.id}`);
    setTodos(todos.filter((t) => t.id !== todo.id));
  };



  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a href={API} className="btn btn-primary me-2">
        Get Todos
      </a>
      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        className="form-control"
        value={todo.id}
        onChange={(e) => setTodo({
          ...todo,
          id: e.target.value
        })} />
      <a href={`${API}/${todo.id}`}
        className="btn btn-primary me-2">
        Get Todo by ID
      </a>
      <h4>Filtering Array Items</h4>
      <a href={`${API}/?completed=true`}
        className="btn btn-primary me-2" >
        Get Completed Todos
      </a>
      <h4>Creating new Items in an Array</h4>
      <a href={`${API}/create`}
        className="btn btn-primary me-2">
        Create Todo
      </a>
      <input
        value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: e.target.value
        })}
        className="form-control mb-2"
        type="number"
      />
      <h4>Deleting from an Array</h4>
      <a href={`${API}/${todo.id}/delete`}
        className="btn btn-primary me-2">
        Delete Todo with ID = {todo.id}
      </a>
      <input
        value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: e.target.value
        })}
        className="form-control mb-2"
        type="number"
      />
      <input
        value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value
        })}
        className="form-control mb-2"
        type="text"
      />
      <h4>Updating an Item in an Array</h4>
      <a
        href={`${API}/${todo.id}}/title/${todo.title}`}
        className="btn btn-primary me-2" >
        Update Title to {todo.title}
      </a>

      <h4>Updating an Item in an Array(description)</h4>
      <label>ID</label>
      <input
        value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: e.target.value
        })}
        className="form-control mb-2"
        type="number"
      />
      {/* 
      Update Title Description
      */}
      <label>Description</label>
      <input
        value={todo.description}
        onChange={(e) => setTodo({
          ...todo, description: e.target.value
        })}
        className="form-control mb-2"
        type="text"
      />
      <a
        href={`${API}/${todo.id}}/description/${todo.description}`}
        className="btn btn-primary me-2" >
        Update Description to {todo.description}
      </a>

      {/* 
      Update Completed Section
      */}
      <h4>Updating an Item in an Array(completed)</h4>
      <label>ID</label>
      <input
        value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: e.target.value
        })}
        className="form-control mb-2"
        type="number"
      />
      <label>Completed</label>
      <input
        onClick={(e) => setTodo({
          ...todo, completed: !todo.completed
        })}
        value={todo.completed}
        className="form-check mb-2 w-75"
        type="checkbox" />
      <a
        href={`${API}/${todo.id}}/completed/${todo.completed}`}
        className="btn btn-primary me-2" >
        Update Completed to {todo.completed}
      </a>

      <h2>Lab Part 4 Stuff</h2>
      <button onClick={createTodo}
        className="btn btn-primary mb-2 w-100">
        Create Todo
      </button>

      <button onClick={updateTitle}
        className="btn btn-success mb-2 w-100">
        Update Title
      </button>
      <textarea
        onChange={(e) => setTodo({
          ...todo,
          description: e.target.value
        })}
        value={todo.description} type="text"
      />
      <input
        onChange={(e) => setTodo({
          ...todo, due: e.target.value
        })}
        value={todo.due} type="date"
      />
      <label>
        <input
          onChange={(e) => setTodo({
            ...todo, completed: e.target.checked
          })}
          value={todo.completed} type="checkbox"
        />
        Completed
      </label>
      <button onClick={postTodo} >
        Post Todo
      </button>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id}
            className="list-group-item">
            <button
              onClick={() => deleteTodo(todo)}
              className="btn btn-danger float-end" >
              Remove
            </button>
            <button
              onClick={() => fetchTodoById(todo.id)}
              className="btn btn-warning me-2 float-end" >
              Edit
            </button>
            <input
              checked={todo.completed}
              type="checkbox" readOnly
            />
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>


          </li>
        ))}
      </ul>
    </div>
  );
}
export default WorkingWithArrays;


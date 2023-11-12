
import React, { useState } from "react";
function WorkingWithArrays() {
  const API = "http://localhost:4000/a5/todos";
  const [todo, setTodo] = useState({ id: 0, title: '', completed: false, description: '' });
  const [todoId, setTodoId] = useState(0);

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
        href={`${API}/${todoId}}/title/${todo.title}`}
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


    </div>
  );
}
export default WorkingWithArrays;


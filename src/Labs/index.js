import Assignment3 from "./a3";
// import JavaScript from "./a3/Javascript";
import Nav from "../Nav";
// import PathParameters from "./a3/PathParameters";
// import Classes from "./a3/Classes";
// import Styles from "./a3/Styles";
// import ConditionalOutput from "./a3/ConditionalOutput";
// import TodoList from "./a3/todo/TodoList";
import store from "./Store";
import { Provider } from "react-redux";

import { Routes, Route, Navigate } from "react-router";
import Assignment4 from "./a4";

export default function Labs() {


  return (
    <div>
      <Provider store={store}>
        <Nav />
        <Routes>
          <Route path="/"
            element={<Navigate to="a3" />} />
          <Route path="a3" element={<Assignment3 />} />
          <Route path="a4"
            element={<Assignment4 />} />
        </Routes>



      </Provider>

      {/* <Assignment3 />
      <JavaScript />
      <PathParameters />
      <Classes />
      <Styles />
      <ConditionalOutput />
      <TodoList /> */}
    </div>
  );
}
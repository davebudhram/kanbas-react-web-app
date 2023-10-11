import Assignment3 from "./a3";
import JavaScript from "./a3/Javascript";
import Nav from "../Nav";
import PathParameters from "./a3/PathParameters";
import Classes from "./a3/Classes";
import Styles from "./a3/Styles";
import ConditionalOutput from "./a3/ConditionalOutput";
import TodoList from "./a3/todo/TodoList";
export default function Labs() {
  return (
    <div>
      <Nav />
      <Assignment3 />
      <JavaScript />
      <PathParameters />
      <Classes />
      <Styles />
      <ConditionalOutput />
      <TodoList />
    </div>
  );
}
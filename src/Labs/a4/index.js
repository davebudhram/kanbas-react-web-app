import Add from "./Add"
import ClickEvent from "./ClickEvent"
import PassingDataOnEvent from "./ParsingDataOnEvent"
import PassingFunctions from "./PassingFunctions"
import EventObject from "./EventObject"
import Counter from "./Counter"
import BooleanStateVariables from "./BooleanStateVariables"
import StringStateVariables from "./StringStateVariables"
import DateStateVariable from "./DateStateVariable"
import ObjectStateVariable from "./ObjectStateVariable"
import ArrayStateVariable from "./ArrayStateVariable"
import ParentStateComponent from "./ParentStateComponent"
import ReduxExamples from "./ReduxExamples/HelloRedux"
import TodoList from './ReduxExamples/todos/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Assignment4() {
  function sayHello() {
    alert('Hello')
  }
  return <>
    <h1>Assignment4</h1>
    <Add a={1} b={2} />
    <ClickEvent />
    <PassingDataOnEvent />
    <PassingFunctions theFunction={sayHello} />
    <EventObject />
    <Counter />
    <BooleanStateVariables />
    <StringStateVariables />
    <DateStateVariable />
    <ObjectStateVariable />
    <ArrayStateVariable />
    <ParentStateComponent />
    <ReduxExamples />
    <TodoList />
  </>
}
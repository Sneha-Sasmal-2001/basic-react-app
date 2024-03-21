//step iv: selector: to bring or fetch data from store
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlices'
// as we are giving removeTodo feature, that means we want to take an action and for that we have to dispatch that action so we need useDispatch.
//as we are using dispatch that means we need a reducer too

function Todos() {
    //useSelector has access of state in a callback. in which we can have our values that we want. state.initialstate's object name also as we are adding values in this(todos)
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      {todos.map((eachTodo) => (
        <li key={eachTodo.id}>
            {eachTodo.text}
            <button onClick={() => dispatch(removeTodo(eachTodo.id))}>X</button>
        </li>
      ))}
    </>
  )
}

export default Todos

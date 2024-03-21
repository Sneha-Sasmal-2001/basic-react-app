//step iii: dispatch => send and add data to store or making changes of data in store by using a reducer. to manipulate store's data
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlices';


function AddTodo() {
    const [input,setInput] = useState('');
    const dispatch = useDispatch();

    function addTodoHandler(e){
        e.preventDefault();
        dispatch(addTodo(input));
        //just a better practice so that after adding todo input field looks clean
        setInput('');
    }
  return (
    <form onSubmit={addTodoHandler}>
      <input type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}/>
      <button type='submit'>Save</button>
    </form>
  )
}

export default AddTodo

//step ii: reducer
import { createSlice,nanoid } from "@reduxjs/toolkit";

/*nanoid is provided to generate unique ids*/

//step:1
const initialState = {
    todos: [{id:1, text: "Hello World"}]
}

//step 2:
    //slicer: slice name and initial state
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    //reducer: functionality
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state , action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        // updateTodo: (state, action) => {
        //     state.todos = state.todos.map((todo) => (
        //         todo.id === action.payload.id ?
        //             todo.text = action.todo.text : todo
                
        //     ))
        // }
    }
})


    //step 3:
    //export reducer
    export const {addTodo,removeTodo,updateTodo} = todoSlice.actions
    export default todoSlice.reducer
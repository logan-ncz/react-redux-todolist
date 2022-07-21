import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [
            {
                id: '1',
                todoName: 'Buy new sweatshirt',
                completed: false,
            },
            {
                id: '2',
                todoName: 'Begin promotional phase',
                completed: true,
            },
        ],
    },

    reducers: {
        addTodo: (state, action) => {
            return {
                // returning a copy of orignal state
                state, //copying the original state
                todos: [...state.todos, action.payload], //new todos array
            }
        },
        toggleTodo: (state, action) => {
            return {
                state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload
                        ? { ...todo, completed: !todo.completed }
                        : todo
                ),
            }
        },
        deleteTodo: (state, action) => {
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            }
        },
    },
})

const { actions, reducer } = todosSlice

export const { addTodo, toggleTodo, deleteTodo } = actions

export default reducer

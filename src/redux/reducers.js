import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },

    reducers: {
        addTodo: (state, action) => {
            return {
                state,
                todos: [...state.todos, action.payload],
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

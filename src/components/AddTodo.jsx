import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { addTodo } from '../redux/reducers'
import { useState } from 'react'

export default function AddTodo() {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos.todos)
    const [todoInput, setTodoInput] = useState('')

    const pushTodo = () => {
        const todo = {
            id: `${todos.length + 1}`,
            todoName: todoInput,
            completed: false,
        }
        dispatch(addTodo(todo))
    }

    const handleSubmit = (event) => {
        console.log('handleSubmit ran')
        event.preventDefault()
        pushTodo()
        setTodoInput('')
    }

    return (
        <form onSubmit={handleSubmit} className="createTodo">
            <input
                className="createTodoInput"
                type="text"
                onChange={(event) => setTodoInput(event.target.value)}
                value={todoInput}
            />
            <button className="createTodoBtn" type="submit">
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </form>
    )
}

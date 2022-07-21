import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { deleteTodo, toggleTodo } from '../redux/reducers'
import { useState } from 'react'

export default function Todo(props) {
    const [hoverCheck, setHoverCheck] = useState(false)
    const dispatch = useDispatch()
    const todoCheck = () => {
        dispatch(toggleTodo(props.id))
    }

    const todoDelete = () => {
        dispatch(deleteTodo(props.id))
    }
    const todoCheckBtnClass = `todoCheck${
        props.completed || hoverCheck ? ' todoCheckCompleted' : ''
    }`

    return (
        <div className="todo">
            <div className="todoLeft">
                <div
                    className={`todoCheck${
                        props.completed || hoverCheck
                            ? ' todoCheckCompleted'
                            : ''
                    }`}
                    onClick={todoCheck}
                    onMouseEnter={() => setHoverCheck(true)}
                    onMouseLeave={() => setHoverCheck(false)}
                >
                    {props.completed && !hoverCheck && (
                        <FontAwesomeIcon icon={faCheck} />
                    )}
                    {!props.completed && hoverCheck && (
                        <FontAwesomeIcon icon={faCheck} />
                    )}
                </div>

                <p
                    className={`todoText ${
                        props.completed ? 'todoTextCompleted' : ''
                    }`}
                >
                    {props.children}
                </p>
            </div>

            <FontAwesomeIcon
                className="todoDelete"
                icon={faXmark}
                onClick={todoDelete}
            />
        </div>
    )
}

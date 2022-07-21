import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { deleteTodo, toggleTodo } from '../redux/reducers'
import { useState } from 'react'

export default function Todo(props) {
    const dispatch = useDispatch()
    const todoCheck = () => {
        dispatch(toggleTodo(props.id))
    }

    const todoDelete = () => {
        dispatch(deleteTodo(props.id))
    }

    return (
        <div className="todo">
            <div className="todoLeft">
                <div
                    className={`todoCheck${
                        props.completed ? ' todoCheckCompleted' : ''
                    }`}
                    onClick={todoCheck}
                >
                    {props.completed && (
                        <FontAwesomeIcon
                            className="todoCheckIconToggleUncomplete"
                            icon={faCheck}
                        />
                    )}
                    {!props.completed && (
                        <FontAwesomeIcon
                            className="todoCheckIconToggleComplete"
                            icon={faCheck}
                        />
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

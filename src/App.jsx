import Todo from './components/Todo'

import { useSelector } from 'react-redux'

import AddTodo from './components/AddTodo'
import DateHeader from './components/DateHeader'

export default function App() {
    const todos = useSelector((state) => state.todos.todos)

    return (
        <div className="container">
            <DateHeader />
            <div className="todos">
                {todos.map(({ id, todoName, completed }) => (
                    <Todo key={id} id={id} completed={completed}>
                        {todoName}
                    </Todo>
                ))}
            </div>
            <AddTodo />
        </div>
    )
}

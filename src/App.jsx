import Todo from './components/Todo'

import { useSelector } from 'react-redux'

import AddTodo from './components/AddTodo'

export default function App() {
    const currentDate = new Date()
    const date = currentDate.getDate()
    const month = currentDate.toLocaleString('fr-fr', { month: 'short' })
    const year = currentDate.getFullYear()

    const todos = useSelector((state) => state.todos.todos)

    return (
        <div className="container">
            <header className="header">
                <div className="header_left">
                    <p className="header_date">{date}</p>
                </div>
                <div className="header_right">
                    <p className="header_month">{month}</p>
                    <p className="header_year">{year}</p>
                </div>
            </header>
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

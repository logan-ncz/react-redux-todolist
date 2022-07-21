export default function DateHeader() {
    const currentDate = new Date()
    const date = currentDate.getDate()
    const month = currentDate.toLocaleString('fr-fr', { month: 'short' })
    const year = currentDate.getFullYear()

    return (
        <header className="header">
            <div className="header_left">
                <p className="header_left_date">{date}</p>
                <div className="header_left_month_and_year">
                    <p className="header_left_month">{month}</p>
                    <p className="header_left_year">{year}</p>
                </div>
            </div>

            <div className="header_right">
                <h1 className="header_right_title">React Redux Todolist</h1>
            </div>
        </header>
    )
}

import Task from "./components/Task"

export default function App() {
    const currentDate = new Date();
    const date = currentDate.getDate()
    const month = currentDate.toLocaleString('fr-fr', { month: 'short' });
    const year = currentDate.getFullYear()

    return (
        <div className="background">
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
                <main>
                    <Task>Buy new sweatshirt</Task>
                    <Task>Begin promotional phase</Task>
                    <Task>Read an article</Task>
                    <Task>Try not to fall asleep</Task>
                    <Task>Watch 'Sherlock'</Task>
                    <Task>Begin QA for the product</Task>
                    <Task>Go for a walk</Task>
                </main>
            </div>
        </div>
    )
}
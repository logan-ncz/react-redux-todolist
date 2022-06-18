import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function Task(props) {
    return (
        <div className="task">
            {/* <i class="fa-check fas menuItem__icon" aria-hidden="true"></i> */}
            <div className="task_check">
                <FontAwesomeIcon icon={faCheck} />
            </div>
            
            <p>{props.children}</p>
        </div>
    )
}
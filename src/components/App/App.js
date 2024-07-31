export default function App() {
    return (
        <>
            <h1 className="page-heading">React todo</h1>

            <hr />

            <form className="new-task">
                <label htmlFor="task" className="new-task__label">Task:</label>
                <input type="text" name="task" id="task" className="new-task__input" />
                <button className="new-task__add btn">Add</button>
            </form>

            <ul className="task-list container">
                <li className="task-list__task">
                    <input type="checkbox" className="task__checkbox" />
                    <span className="task__name">Do something fun today</span>
                    <button className="task__delete btn">Delete</button>
                </li>
            </ul>
        </>
    );
}
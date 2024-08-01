export default function App() {
    const taskList = [<Task key={0} label={"First task"} />, <Task key={1} label={"Second task"} />];

    return (
        <>
            <PageHeading title={"React Todo"} />

            <hr />

            <TaskForm />
            <TaskList taskList={taskList} />
        </>
    );
}

function PageHeading({ title }) {
    return (
        <h1 className="page-heading">{title}</h1>
    );
}

function TaskForm() {
    return (
        <form className="new-task">
            <label htmlFor="task" className="new-task__label">Task:</label>
            <input type="text" name="task" id="task" className="new-task__input" />
            <button className="new-task__add btn">Add</button>
        </form>
    );
}

function TaskList({ taskList }) {
    return (
        <ul className="task-list container">
            {taskList}
        </ul>
    );
}

function Task({ label }) {
    return (
        <li className="task-list__task">
            <input type="checkbox" className="task__checkbox" />
            <span className="task__name">{label}</span>
            <button className="task__delete btn">Delete</button>
        </li>
    );
}
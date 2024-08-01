import React, { useCallback, useContext, useState } from "react";

const HandleCreateTaskContext = React.createContext();

export default function App() {
    const [taskList, setTaskList] = useState(null);

    const handleCreateTask = useCallback(() => {
        const tempTaskList = (taskList === null) ? [] : taskList.slice();
        const taskInput = document.getElementById("task");

        tempTaskList.push(<Task key={tempTaskList.length} label={taskInput.value} />);
        setTaskList(tempTaskList);
    }, [taskList]);


    return (
        <HandleCreateTaskContext.Provider value={handleCreateTask}>
            <PageHeading title={"React Todo"} />

            <hr />

            <TaskForm />
            <TaskList taskList={taskList} />
        </HandleCreateTaskContext.Provider>
    );
}

function PageHeading({ title }) {
    return (
        <h1 className="page-heading">{title}</h1>
    );
}

function TaskForm() {
    const handleCreateTask = useContext(HandleCreateTaskContext);

    return (
        <div className="new-task">
            <label htmlFor="task" className="new-task__label">Task:</label>
            <input type="text" name="task" id="task" className="new-task__input" />
            <button className="new-task__add btn" onClick={handleCreateTask}>Add</button>
        </div>
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
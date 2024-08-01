import React, { useCallback, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

const HandleCreateTaskContext = React.createContext();
const HandleDeleteTaskContext = React.createContext();

export default function App() {
    const [taskList, setTaskList] = useState([]);
    const [checkedTaskList, setCheckedTaskList] = useState([]);

    const taskComponentList = taskList.map((task, taskId) => {
        return (
            <Task key={task.id} label={task.label} onCheckTask={() => { handleCheckTask(taskId); }} onDeleteTask={() => { handleDeleteTask(taskId); }} />
        );
    })

    const handleCreateTask = useCallback(() => {
        const tempTaskList = taskList.slice();
        const taskInput = document.getElementById("task");

        tempTaskList.push({ id: uuid(), label: taskInput.value });
        setTaskList(tempTaskList);
    }, [taskList]);

    const handleCheckTask = useCallback((taskId) => {
        const tempTaskList = taskList.slice();
        const tempCheckedTaskList = checkedTaskList.slice();

        tempCheckedTaskList.push(tempTaskList[taskId]);
        tempTaskList.splice(taskId, 1);

        setTaskList(tempTaskList);
        setCheckedTaskList(tempCheckedTaskList);

    }, [taskList, checkedTaskList]);

    const handleDeleteTask = useCallback((taskId) => {
        const tempTaskList = taskList.slice();
        tempTaskList.splice(taskId, 1);

        setTaskList(tempTaskList);
    }, [taskList]);

    return (
        <HandleCreateTaskContext.Provider value={handleCreateTask}>
            <HandleDeleteTaskContext.Provider value={handleDeleteTask}>
                <PageHeading title={"React Todo"} />

                <hr />

                <TaskForm />
                <TaskList taskList={taskComponentList} />
            </HandleDeleteTaskContext.Provider>
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

function Task({ label, onCheckTask, onDeleteTask }) {
    return (
        <li className="task-list__task">
            <input type="checkbox" className="task__checkbox" onChange={onCheckTask} />
            <span className="task__name">{label}</span>
            <button className="task__delete btn" onClick={onDeleteTask}>Delete</button>
        </li>
    );
}
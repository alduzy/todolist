import React from 'react';
import Task from './Task';

const TaskList = (props) => {

    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);
    done.sort((a, b) => b.doneDate - a.doneDate);

    const activeTasks = active.map(task => <Task
        key={task.id}
        task={task}
        done={props.done}
        remove={props.remove}
    />)

    const doneTasks = done.map(task => <Task
        key={task.id}
        task={task}
        done={props.done}
        remove={props.remove}
    />)

    return (
        <>
            <div className="active">
                <h1>Remaining tasks: {active.length > 0 && active.length}</h1>
                {activeTasks.length > 0 ? activeTasks : <p>No tasks for now!</p>}
            </div>
            <hr />
            <div className="inactive">
                <h2>Completed tasks: {done.length}</h2>
                {doneTasks.slice(0, 5)}
                {done.length > 5 && <p>and {done.length - 5} more</p>}
            </div>
        </>
    );
}

export default TaskList;
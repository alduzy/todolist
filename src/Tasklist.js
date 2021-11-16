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
        <div className="container">
            <div className="row m-4 m-lg-0 gx-4 gy-4">
                <div className="col-md-7">
                    <div className="card">
                        <div className="card-header">
                            <h2 className="card-title display-6">Remaining tasks: {active.length ? active.length : "None!"}</h2>
                        </div>
                        <ul className="list-group list-group-flush">
                            {activeTasks}
                        </ul>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header">
                            <h2 className="card-title display-6">Completed: {done.length}</h2>
                        </div>
                        <ul className="list-group list-group-flush">
                            {doneTasks.slice(0, 7)}
                        </ul>
                        {done.length > 7 && <div className="card-footer"><h5 className="text-center">...and {done.length - 5} more</h5></div>}
                    </div>
                </div>
            </div >
        </div>
    );
}

export default TaskList;
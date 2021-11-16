import React from 'react';

const Task = (props) => {

    const { text, date, id, active, important, doneDate } = props.task;

    const finishDate = new Date(doneDate).toLocaleString()

    if (active) {
        return (
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <h5>{important && " PRIORITY: "}{text}</h5>
                    <p>until: {date}</p>
                </div >
                <div className="btn-group btn-group-sm">
                    <button className="btn btn-outline-dark" onClick={() => props.done(id)}>Completed</button>
                    <button className="btn btn-outline-dark" onClick={() => props.remove(id)}>Delete</button>
                </div>
            </li >
        );
    }
    else {
        return (
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <h5>{text}</h5>
                    <p>completed by {finishDate.slice(0, 17)}</p>
                </div>
                <button className="btn btn-sm btn-outline-dark" onClick={() => props.remove(id)}>Delete</button>
            </li>
        );
    }
}

export default Task;
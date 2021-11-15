import React from 'react';

const Task = (props) => {

    const styleImportant = {
        color: "red",
    }

    const { text, date, id, active, important, doneDate } = props.task;

    const finishDate = new Date(doneDate).toLocaleString()

    if (active) {
        return (
            <div>
                <p><strong style={important ? styleImportant : null}>{text}</strong> until: {date}</p>
                <button onClick={() => props.done(id)}>Mark as completed</button>
                <button onClick={() => props.remove(id)}>Delete</button>
            </div >
        );
    }
    else {
        return (
            <div>
                <p><strong>{text}</strong> completed by {finishDate}</p>
                <button onClick={() => props.done(id)}>Move back</button>
                <button onClick={() => props.remove(id)}>Delete</button>
            </div>
        );
    }
}

export default Task;
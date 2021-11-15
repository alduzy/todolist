import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {

    minDate = new Date().toISOString().slice(0, 10);

    state = {
        text: "",
        date: this.minDate,
        checked: false
    }

    handleText = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleCheckbox = (e) => {
        this.setState({
            checked: e.target.checked
        })
    }

    handleDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    handleAdd = () => {
        const { text, date, checked } = this.state;
        if (text.length < 2) return alert("task too short")
        const add = this.props.add(text, date, checked)
        if (add) {
            this.setState({
                text: "",
                date: this.minDate,
                checked: false,
            })
        }
    }

    render() {

        let maxDate = this.minDate.slice(0, 4) * 1 + 1;
        maxDate = maxDate + "-12-31";

        return (
            <div className="form">
                <input
                    type="text"
                    placeholder="add task"
                    value={this.state.text}
                    onChange={this.handleText}
                />
                <input
                    type="checkbox"
                    checked={this.state.checked}
                    onChange={this.handleCheckbox}
                />
                <br />
                <input
                    type="date"
                    value={this.state.date}
                    min={this.minDate}
                    max={maxDate}
                    onChange={this.handleDate}
                />
                <br />
                <button onClick={this.handleAdd}>Add</button>
            </div>
        );
    }
}

export default AddTask;
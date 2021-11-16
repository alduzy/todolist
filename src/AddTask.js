import React, { Component } from 'react';

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
            <div class="jumbotron mb-4 mt-0">
                <div className="container pt-5">
                    <div className="row m-4 m-lg-0">
                        <h1 className="display-2 pt-5">This is a To Do List</h1>
                        <div className="col-md-4">
                            <div className="">
                                <label className="mt-2">Your task:</label>
                                <input className="mt-2 form-control"
                                    type="text"
                                    placeholder="add task"
                                    value={this.state.text}
                                    onChange={this.handleText}
                                />
                            </div>
                            <div className="mt-2">
                                <label>Deadline:</label>
                                <input className="mt-2 form-control"
                                    type="date"
                                    value={this.state.date}
                                    min={this.minDate}
                                    max={maxDate}
                                    onChange={this.handleDate}
                                />
                            </div>
                            <div className="form-check mt-2">
                                <label className="form-check-label">Priority</label>
                                <input className="form-check-input"
                                    type="checkbox"
                                    checked={this.state.checked}
                                    onChange={this.handleCheckbox}
                                />
                            </div>
                            <button className="btn btn-lg btn-dark btn-primary mt-4" onClick={this.handleAdd}>Add task</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddTask;
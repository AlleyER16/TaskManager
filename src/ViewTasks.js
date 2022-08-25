import React from "react";

import { Link } from "react-router-dom";

import { useState } from "react";

const ViewTasks = () => {

    const [name, setName] = useState("");

    const add_new_task = (e) => {
        e.preventDefault();
    }

    const delete_task = (id) => {

    }

    return (
        <React.Fragment>
        <form className="task-form" onSubmit={add_new_task}>
            <h4>task manager</h4>
            <div className="form-control">
            <input type="text" name="name" className="task-input" placeholder="e.g. wash dishes" value={name} onChange={e => setName(e.target.value)} />
            <button type="submit" className="btn submit-btn">submit</button>
            </div>
            <div className="form-alert"></div>
        </form>

        <section className="tasks-container">
            <p className="loading-text">Loading...</p>
            <div className="tasks">
                <div className={`single-task ${false && "task-completed"}`} key={1}>
                    <h5><span><i className="far fa-check-circle"></i></span>{"Go to school"}</h5>
                    <div className="task-links">
                        <Link to={`/task/${1}`} className="edit-link">
                            <i className="fas fa-edit"></i>
                        </Link>
                        <button type="button" className="delete-btn" onClick={() => delete_task(1)}>
                            <i className="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        </React.Fragment>
    )

}

export default ViewTasks;
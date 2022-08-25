import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

import { useState } from "react";

const SingleTask = () => {

    const {id} = useParams();

    const [task, setTask] = useState({id, name: "Go to school", completed: false});
    const [serverResponse, setServerResponse] = useState("");

    const handleChange = (e) => {

        if(e.target.name === "name")
            setTask({...task, [e.target.name]:e.target.value});
        else if(e.target.name === "completed")
            setTask({...task, [e.target.name]:e.target.checked});

    }
    
    const updateTask = (e) => {
        e.preventDefault();
    }

    if(task === ""){
        return (
            <div className="tasks-container">
                <h3><span className="fas fa-spinner fa-spin"></span> Fetching task...</h3>
            </div>
        );
    }else if(task === "NF"){
        return (
            <div className="tasks-container">
                <h3>Error fetching task</h3>
            </div>
        );
    }

    return (
        <div className="container">
            <form className="single-task-form" onSubmit={updateTask}>
                <h4>Edit Task</h4>
                <div className="form-control">
                    <label>Task ID</label>
                    <p className="task-edit-id">{id}</p>
                </div>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" className="task-edit-name" value={task.name} onChange={handleChange}/>
                </div>
                <div className="form-control">
                    <label htmlFor="completed">completed</label>
                    <input type="checkbox" name="completed" className="task-edit-completed" checked={task.completed && "checked"} onChange={handleChange}/>
                </div>
                <button type="submit" className="block btn task-edit-btn">edit</button>
                <div className="form-alert">{serverResponse}</div>
            </form>
            <Link to="/" className="btn back-link">back to tasks</Link>
        </div>
    );

}

export default SingleTask;
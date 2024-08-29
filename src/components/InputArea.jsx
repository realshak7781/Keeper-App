import React, { useState } from "react";

function InputArea(props) {
    const [task, setTask] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setTask((prevVal) => {
            return {
                ...prevVal,
                [name]: value
            };
        });
    }

    function handleSubmit(event) {
        props.onAdd(task);
        setTask({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name="title"
                    onChange={handleChange}
                    value={task.title}  // Bind input value to state
                    type="text"
                    placeholder="Title"
                />
                <textarea
                    name="content"
                    onChange={handleChange}
                    value={task.content}  // Bind textarea value to state
                    placeholder="Take a note..."
                    rows="3"
                ></textarea>
                <button type="submit">
                    Add
                </button>
            </form>
        </div>
    );
}

export default InputArea;

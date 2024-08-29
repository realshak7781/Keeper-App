import React, { useState } from "react";
import AddTaskIcon from '@mui/icons-material/AddTask';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function InputArea(props) {
    const [task, setTask] = useState({
        title: "",
        content: ""
    });

    const isButtonVisible = task.content.length > 0;

    const rowsCount = isButtonVisible ? 3 : 1;

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
            <form className="create-note" onSubmit={handleSubmit}>
            {isButtonVisible && (
                    <input
                        name="title"
                        onChange={handleChange}
                        value={task.title}  // Bind input value to state
                        type="text"
                        placeholder="Title"
                    />
                )}
                <textarea
                    name="content"
                    onChange={handleChange}
                    value={task.content}  // Bind textarea value to state
                    placeholder="Take a note..."
                    rows={rowsCount}
                ></textarea>
                <Zoom in={isButtonVisible}>
                <Fab type="submit">
                <AddTaskIcon/>
                </Fab>
                </Zoom>
            </form>
           
        </div>
    );
}

export default InputArea;

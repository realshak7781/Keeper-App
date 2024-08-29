import React from "react";
import "./../styles/note.css";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
  return (
        <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button className="note1" onClick={()=>{
          props.deleteFunc(props.id)
        }}><DeleteIcon/></button>
      </div>
  );
}


export default Note;

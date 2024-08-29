import React from "react";
import "./../styles/note.css";

function Note(props) {
  return (
        <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button className="note1" onClick={()=>{
          props.deleteFunc(props.id)
        }}>Delete</button>
      </div>
  );
}


export default Note;

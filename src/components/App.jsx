import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import InputArea from "./InputArea";

function App() {
  const [uNotes,setNotes]=useState(notes);

  function handleDelete(id){
    setNotes(uNotes.filter((note,index)=>{
      return index!==id;
    }));
  }

  function handleAdd(newNote){
    setNotes((prevNotes)=>{
      return[...prevNotes,newNote];
      
    });
  }

  return (
    <div>
      <Header />
      <InputArea
       onAdd={handleAdd}/>
     {uNotes.map((note,index)=>{
       return <Note  key={index} id={index} title={note.title} content={note.content} deleteFunc={handleDelete} />
     })}
      <Footer />
    </div>
  );
}

export default App;

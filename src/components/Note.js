
import NoteItem from "./NoteItem";
import NoteContext from "../context/noteContext";
import { useContext, useEffect, useState } from "react";

export default function Note() {
   let obj = useContext(NoteContext);
   let arr = obj.allNotes;
   let addNote = obj.addNote;
   let fetchAllNotes = obj.fetchAllNotes;
   useEffect(() => {
    //Runs only on the first render
    fetchAllNotes();
  }, []);
   const [note,setNote]=useState({title:"",tag:"",description:""});

   const handleChange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value})
   }
   const handleClick=(e)=>{
    addNote(note);
    setNote({title:"",tag:"",description:""});
   }
  return (
    <div className="container">
      <div className="row">
      <div className="mb-3 col">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title:
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="title"
          name="title"
          // value={note.title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3 col">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Tag:
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput"
          placeholder="tag"
          name="tag"
          // value={note.tag}
          onChange={handleChange}
        />
      </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="5"
          name="description"
          // value={note.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="mb-3">
        <button className="btn btn-primary" onClick={handleClick}>submit</button>
      </div>
      <h4>Your Notes:</h4>
      <div className="row">
        { (arr.length) <=0 && "No data to display.."}
      {  
        arr.map((e)=>{
            return <NoteItem key={e._id} id={e._id} data={e}/>
        })
      }
      </div>
    </div>
  );
}

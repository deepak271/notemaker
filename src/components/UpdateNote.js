import React, { useContext } from "react";
import NoteContext from "../context/noteContext";

function UpdateNote() {
    let obj = useContext(NoteContext);
    let udata = obj.udata;
    let setUdata = obj.setUdata;
    let editNote = obj.editNote;

    const handleChange = (e)=>{
        setUdata({...udata,[e.target.name]:e.target.value})
    }
  const handleClick = ()=>{
    editNote();
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
             value={udata.title}
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
            id="exampleFormControlInput1"
            placeholder="tag"
            name="tag"
            value={udata.tag}
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
           value={udata.description}
           onChange={handleChange}
        ></textarea>
      </div>
      <div className="mb-3">
        <button className="btn btn-primary" onClick={handleClick} >
          update
        </button>
      </div>
    </div>
  );
}

export default UpdateNote;

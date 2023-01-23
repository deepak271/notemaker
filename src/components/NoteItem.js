import { useContext } from "react";
import NoteContext from "../context/noteContext";


function NoteItem(props) {
   let obj = useContext(NoteContext);
  let editNote = obj.editNote;
  let deleNote = obj.deleNote;
  const handleDelete=(e)=>{
    deleNote(props.id);
  }
  return (
    <div className="col-md-3 my-3">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="card-title text-success">{props.data.title}</h5>
            <h5 className="card-title text-primary">{props.data.tag}</h5>
          </div>
          <p className="card-text">
            {props.data.description}
            </p>
          <div className="d-flex justify-content-center">
            <button className="btn btn-info mx-3">
              <i className="fa fa-pencil"></i>
            </button>
            <button className="btn btn-danger" onClick={handleDelete}>
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;

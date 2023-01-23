import { useContext } from "react";
import NoteContext from "../context/noteContext";
import { Link } from "react-router-dom";

function NoteItem(props) {
   let obj = useContext(NoteContext);
   let arr = obj.allNotes;
   let setUdata = obj.setUdata;
  let deleNote = obj.deleNote;
  let handleUpdate = (e)=>{
    console.log("clicked")
   let farr = arr.filter((el)=>el._id===props.id);
   const {_id,title,tag,description}=farr[0];
   setUdata({_id,title,tag,description})
  }
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
            <Link className="btn btn-info mx-3" onClick={handleUpdate} to='/update'>
              <i className="fa fa-pencil"></i>
            </Link>
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

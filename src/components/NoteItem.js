import { useContext } from "react";
import NoteContext from "../context/noteContext";

function NoteItem() {
  // let user = useContext(NoteContext)
  // console.log(user)
  return (
    <div>
      <div className="card" style={{width: "18rem"}}>
         <div className="card-body">
         <div className="d-flex justify-content-between">
         <h5 className="card-title text-success">Card title</h5>
          <h5 className="card-title text-primary">Tag</h5>
         </div>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="d-flex justify-content-center">
                <button className="btn btn-primary mx-3">add</button>
                <button className="btn btn-primary">add</button>
          </div>
         </div>
      </div>
    </div>
  );
}

export default NoteItem;

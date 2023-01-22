
import NoteItem from "./NoteItem";

export default function Note() {

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
        ></textarea>
      </div>
      <h4>Your Notes:</h4>
      <NoteItem/>
    </div>
  );
}

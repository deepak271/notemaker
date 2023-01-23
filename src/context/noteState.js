import axios from "axios";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  //console.log("note:"+NoteContext)

  let allData = [];

  const [allNotes, setNotes] = useState(allData);

  const addNote = async (obj) => {
    // obj._id=Date.now();
    // //console.log("addNote:"+obj)
    // setNotes([...allNotes,obj]);
    let response = await axios.post(
      "http://localhost:5000/api/note/saveNotes",
      obj,
      {
        headers: {
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1X2lkIjoiNjNjYzVkM2VkODI1NjliNTI4ZjBkOWRlIiwiaWF0IjoxNjc0NDAwNTcyfQ.lWzauIub4qDSp3fNPHuLXNP8rhz7fDpwX5lbrcbRiDQ",
        },
      }
    );
    //console.log(response);
    console.log(response.data);
    setNotes([response.data.result, ...allNotes]);
  };
  const fetchAllNotes = async () => {
    let url = "http://localhost:5000/api/note/getAllNotes";
    let resp = await fetch(url, {
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1X2lkIjoiNjNjYzVkM2VkODI1NjliNTI4ZjBkOWRlIiwiaWF0IjoxNjc0NDAwNTcyfQ.lWzauIub4qDSp3fNPHuLXNP8rhz7fDpwX5lbrcbRiDQ",
      },
    });
    let data = await resp.json();
    console.log(data);
    setNotes(data);
  };

  const editNote = () => {};

  const deleNote = async (id) => {
    console.log(id);
    let url = `http://localhost:5000/api/note/deleteNote/${id}`;
    const del = await axios.delete(url, {
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1X2lkIjoiNjNjYzVkM2VkODI1NjliNTI4ZjBkOWRlIiwiaWF0IjoxNjc0NDAwNTcyfQ.lWzauIub4qDSp3fNPHuLXNP8rhz7fDpwX5lbrcbRiDQ",
      },
    });
    console.log(del);
  };
  return (
    <NoteContext.Provider
      value={{ allNotes, addNote, editNote, fetchAllNotes, deleNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

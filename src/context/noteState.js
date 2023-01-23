import axios from "axios";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  //console.log("note:"+NoteContext)
  const isLogged = true;
  const [udata, setUdata] = useState({_id:"", title: "", tag: "", description: "" });
  const [allNotes, setNotes] = useState([]);

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
    if (isLogged) {
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
    } else {
      isLogged = false;
    }
  };

  const editNote = async () => {
    let url = `http://localhost:5000/api/note/updateNote/${udata._id}`;
    let edata = await axios.put(url,udata,{
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1X2lkIjoiNjNjYzVkM2VkODI1NjliNTI4ZjBkOWRlIiwiaWF0IjoxNjc0NDAwNTcyfQ.lWzauIub4qDSp3fNPHuLXNP8rhz7fDpwX5lbrcbRiDQ",
      },
    })
    console.log(edata);
    let newArr = allNotes;
    for(let i=0;i<newArr.length;i++)
    {
      if(udata._id===newArr[i]._id)
      {
        newArr[i].title=edata.data.updated.title;
        newArr[i].tag=edata.data.updated.tag;
        newArr[i].description=edata.data.updated.description;

      }
    }
    setNotes(newArr);
  };

  const deleNote = async (id) => {
    console.log(id);
    let url = `http://localhost:5000/api/note/deleteNote/${id}`;
    const del = await axios.delete(url, {
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1X2lkIjoiNjNjYzVkM2VkODI1NjliNTI4ZjBkOWRlIiwiaWF0IjoxNjc0NDAwNTcyfQ.lWzauIub4qDSp3fNPHuLXNP8rhz7fDpwX5lbrcbRiDQ",
      },
    });
    //console.log(del);
    let filterArray = allNotes.filter((el) => el._id !== id);
    setNotes(filterArray);
  };
  return (
    <NoteContext.Provider
      value={{
        allNotes,
        udata,
        setUdata,
        addNote,
        editNote,
        fetchAllNotes,
        deleNote,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

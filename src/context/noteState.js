
import { Children } from "react";
import NoteContext from "./noteContext";    

const NoteState = (props)=>{
    //console.log("note:"+NoteContext)
    let a ={
        name:'deepak',
        msg :"Happy Birthday"
    }
    return (
        <NoteContext.Provider value={a}>
         {props.children}
        </NoteContext.Provider>
      )
}
 
export default NoteState;
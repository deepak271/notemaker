import './App.css';
import Navbar from './components/Navbar';
import Note from './components/Note';
import UpdateNote from './components/UpdateNote';
import NoteState from './context/noteState';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
      <NoteState>
        <Navbar/>

        <Routes>
        <Route path="/home" element={<Note />} />
        <Route path="/update" element={<UpdateNote/>}/>
        </Routes>
      </NoteState>
      </BrowserRouter>
    </div>
  );
}

export default App;

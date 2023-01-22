import './App.css';
import Navbar from './components/Navbar';
import Note from './components/Note';
import NoteState from './context/noteState';

function App() {
  return (
    <div>
      <NoteState>
        <Navbar/>
        <Note/>
      </NoteState>
    </div>
  );
}

export default App;

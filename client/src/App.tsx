import { useEffect, useState } from "react";
import Router from "./router";
import { v4 as uuidv4 } from "uuid";
import type { Note } from "./types";
import { BrowserRouter } from "react-router-dom";
function App() {
  // this code for 9 to 12 line initializes the notes state with data saved in localStorage
  // (if any) or with an empty array if there's not saved date
  const [notes, setNotes] = useState<Note[]>(() => {
    const stored = localStorage.getItem("notes");
    return stored ? JSON.parse(stored) : [];
  });
  const [show, setShow] = useState(false);
  // this use effect runs every time the notes state changes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  // This function creates a new note with a unique ID, current time, and fixed user "John",
  // then shows some UI element (setShow(true)) and adds the new note to your notes list in state.
  const handleCreateNote = (data: any) => {
    setShow(true); // shows a modal UI screenn
    const newNote: Note = {
      id: uuidv4(),
      note: data.note,
      user: "John",
      timestamp: Date.now(),
    };
    setNotes((notes) => [...notes, newNote]);
  };

  const handleEditNote = (
    id: string,
    note: string,
    user: string,
    timestamp: number
  ) => {
    const updatedNote: Note = { id, note, user, timestamp };
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === id ? updatedNote : note))
    );
  };

  const handleDeleteNote = (id: string) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const ShowModal = () => {
    setShow(!show);
  };

  return (
    <BrowserRouter>
      <div data-testid="app">
        <Router
          notes={notes}
          fnHandleCreate={handleCreateNote}
          fnHandleEdit={handleEditNote}
          fnHandleDelete={handleDeleteNote}
          showModal={ShowModal}
          show={show}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;

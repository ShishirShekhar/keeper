import React from "react";
import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import InputArea from "./components/InputArea";


function App() {
  const [notes, setNotes] = React.useState([]);

  function addNote(note, setNote) {
    setNotes((prev) => [...prev, note]);
    setNote({ title: "", content: "" });
  }

  function delNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div>
      <Header />
      <InputArea onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDel={delNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

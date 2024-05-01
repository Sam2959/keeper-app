import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevValue) => {
      return [...prevValue, note];
    });
  }
  function deleteItem(id) {
    setNotes((prevValue) => {
      return prevValue.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  console.log(notes);
  return (
    <div>
      <Header />
      <CreateArea sendNote={addNote} />
      {notes.map((singleNote, index) => {
        return (
          <Note
            onDelete={deleteItem}
            key={index}
            id={index}
            title={singleNote.title}
            content={singleNote.content}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;

import { useState, useContext } from "react";
import useNotes from "../hooks/useNotes";
import { ColourContext } from "../context/ColourContext";
import Note from "./Note";

const NoteBoard = () => {
    const [text, setText] = useState("");
    const {notes, addNote, deleteNote} = useNotes();
    const {Colour} = useContext(ColourContext);

    const handleAdd = (e) => {
        e.preventDefault()
        addNote(text,Colour);
        setText("")
    };

    return (
        <section>
            <form onSubmit={handleAdd}>
               <input
                 type= "text"
                 value={text}
                 onChange={(e) => setText(e.target.value)}
                 placeholder="Your new note"
                /> 
                <button type="submit">Add new note</button>
            </form>

           <div className="notes-container">
                 {notes.length === 0 ? (
                    <p style={{ color: "#888", fontStyle: "italic", marginTop: "20px" }}>
                        The board is empty. Add a note to get started!
                    </p>
                ) : (
                    notes.map((note) => (
                      <Note 
                        key={note.id} 
                        id={note.id} 
                        text={note.text} 
                        colour={note.colour} 
                        onDelete={deleteNote} 
                      />
                    ))
                )}
            </div>
        </section>
    );
};


export default NoteBoard
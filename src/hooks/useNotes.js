import {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';

const useNotes = () => {
    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem("my-sticky-notes");
        return savedNotes ? JSON.parse(savedNotes) : [];
    });

    useEffect(() => {
        localStorage.setItem("my-sticky-notes", JSON.stringify(notes));
    }, [notes]);

    const addNote = (text, colour) => {
        if (!text.trim()) return;

        if (notes.length >= 10) {
            alert("Limit reached! Please delete a note before adding a new one.");
            return;
        }

        const newNote={
            id:uuidv4(),
            text,
            colour,
        };
        setNotes((prevNotes)=> [...prevNotes,newNote]);
    };
    const deleteNote =(id) => {
        setNotes((prevNotes) => prevNotes.filter((note)=> note.id !== id));
    };
    return {notes, addNote , deleteNote}
};

export default  useNotes
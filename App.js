import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import NoteList from './components/NoteList'
import { nanoid } from 'nanoid';
import { MdSearch } from 'react-icons/md';




const App = () => {
    const [notes,setNotes] = useState([]);
    const [filteredNotes,setFilteredNotes] = useState([]);
    const addNoteHandler = ({note,color}) => {
        let date = new Date()
        const newNote = {
            id:nanoid(),
            text:note,
            dateCreated:date.toLocaleDateString(),
            bg:color
        }
        const noteArr = [...notes,newNote];
        setNotes(noteArr);
        setFilteredNotes(noteArr)

        
    }
    useEffect(() => {   
        if(notes.length !== 0)  {
            localStorage.setItem("myNotes",JSON.stringify(notes));
        }
        
    },[notes])
 



    useEffect(() => {   
        let notes = JSON.parse(localStorage.getItem("myNotes"));
        if(notes) {
            setNotes(notes)
            setFilteredNotes(notes)
        } 
    },[])





    const deleteNoteHandler = (noteId) => {
        console.log(noteId)
        setFilteredNotes(notes.filter((e) => {return e.id !== noteId;}))
        setNotes(notes.filter((e) => {return e.id !== noteId;}))
        let notesJSON = JSON.parse(localStorage.getItem("myNotes")).filter((ele) => {
            return ele.id !== noteId
        });
        localStorage.setItem("myNotes",JSON.stringify(notesJSON));
        
    }

    const searchHandler = (e) => {
        let searchText = e.target.value;
        let searchedNotes = notes.filter((e) => {
                return e.text.toLowerCase().includes(searchText.toLowerCase())})
        setFilteredNotes(searchedNotes);
    }
    return <div className='container'>
    <div className='search-box'>
    <MdSearch  className="search-icon" size='1.5rem'/>
    <input placeholder="Start typing to search notes........" onChange={searchHandler} className='search-note'></input>

    </div>
    {<NoteList notes={filteredNotes} addNote = {addNoteHandler} deleteNote={deleteNoteHandler}/>}
    </div>
    
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)
import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import ColorPicker from './ColorPicker';

const AddNote = ({addNote}) => {
  const [color,setColor] = useState('brown');
  const [note,setNoteText]= useState('');
  const handleAddNote = () => {
    addNote({"note":note,"color":color})
  }
  const handleNoteChange = (e) =>  {
    if(200 - e.target.value.length >= 0){
        setNoteText(e.target.value)
    }

  }

  const handleSaveClick = () => {
        if(note.trim().length > 0){
            handleAddNote(note);
            setNoteText('')
        }
  }
  const selectColour = (clr) => {
    setColor(clr)

  }
  return (
    <div className='add-note' style={{backgroundColor:color}}>
    <ColorPicker colorHandler={selectColour}/>
    <textarea  style={{color:"white"}}onChange={handleNoteChange} className='textarea-note' value={note} rows={8} cols={20} placeholder='Type to create a new note...'/>
    <div className='add-note-footer'>
    <span>{200 - note.length} chars remaining</span>
    <button onClick={handleSaveClick} className='save-note'>Save</button>
    </div>
    </div>
  )
  }

export default AddNote;
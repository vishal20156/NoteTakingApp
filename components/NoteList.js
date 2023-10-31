import Note from './Note';
import AddNote from './AddNote';
const NoteList = ( { notes,addNote,deleteNote}) => {

  return (
    <div className='note-list'>
    {notes && notes.map((note) => {
        return <Note text={note.text} bg = {note.bg} id = {note.id} date={note.dateCreated} deleteNote={deleteNote}/>
    })}
    
    <AddNote addNote={addNote}/>
    </div>
    
  )
}

export default NoteList;

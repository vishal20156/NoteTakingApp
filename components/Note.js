import {MdDeleteForever} from 'react-icons/md'
const Note = ( {text,bg,date,id,deleteNote}) => {
    const handleNoteDelete = () => {
        deleteNote(id)
    }
  return (
    <div style={{backgroundColor:bg}} className="note">
        <span className='note-text'>{text}</span>
        <div className="note-footer">
            <small>{date}</small>
            <MdDeleteForever onClick={(e) => handleNoteDelete(id)} className='delete-icon' size='1.4rem'/>
        </div>
    </div>
  )
}
export default Note;
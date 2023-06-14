import { useDispatch } from "react-redux";
import { deleteNote } from "../features/notes/noteSlice"
import { CgCloseR, CgPen, CgBookmark } from "react-icons/cg";

function NoteItem({ note }) {

    const dispatch = useDispatch()

    return (
        <div className="note">
            <div className="note-options-container">
                {/* <CgBookmark className="note-option note-option-bookmark" onClick={() => dispatch(saveNote(note._id))}/> */}
                <CgCloseR className="note-option note-option-delete" onClick={() => dispatch(deleteNote(note._id))}/>
                {/* <CgPen className="note-option note-option-edit" onClick={() => dispatch(editNote(note._id))}/> */}
                {/* <CgPen className="note-option note-option-view" onClick={() => dispatch(viewNote(note._id))}/> */}
            </div>
            <div>{new Date(note.createdAt).toLocaleString("en-US")}</div>
            <h2>{note.text}</h2>
            <h3>Privacy: {note.privacy}</h3>
        </div>
    );
}

export default NoteItem;

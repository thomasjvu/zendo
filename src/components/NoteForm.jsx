import { useState } from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../features/notes/noteSlice";
import Tiptap from "../components/Tiptap.jsx";

function NoteForm() {
    const [text, setText] = useState("");
    const [privacy, setPrivacy] = useState("");

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(createNote({ text }));
        setText("");
        setPrivacy("");
    };

    return (
        <section className="form">
            <form onSubmit={onSubmit}>
                {/*
                <div className="form-group">
                    <label htmlFor="text">Tiptap</label>
                    <Tiptap
                        className="tiptap"
                        name="text"
                        id="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                */}
                <div className="form-group">
                    <label htmlFor="text">Note</label>
                    <input
                        type="text"
                        name="text"
                        id="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="text">Privacy</label>
                    <select
                        type=""
                        name="privacy"
                        id="privacy"
                        value={privacy}
                        onChange={(e) => setPrivacy(e.target.value)}
                    >
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                    </select>
                </div>
                <div className="form-group">
                    <button className="btn btn-block" type="submit">
                        Add Note
                    </button>
                </div>
            </form>
        </section>
    );
}

export default NoteForm;

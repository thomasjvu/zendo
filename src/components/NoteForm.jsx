import React, { useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useDispatch } from "react-redux";
import { createNote } from "../features/notes/noteSlice";
import Quill from "quill";
import ReactQuill from "react-quill";
import QuillMarkdown from "quilljs-markdown";

function NoteForm() {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [privacy, setPrivacy] = useState("");

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(createNote({ text, privacy }));
        setText("");
        setPrivacy("");
    };

    /* Quill Settings */
    const modules = {
        markdownOptions: {},
    };

    Quill.register("modules/markdownOptions", QuillMarkdown);

    return (
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label className="" htmlFor="text">Start Writing</label>
                    <ReactQuill
                        theme="bubble"
                        className="editor"
                        modules={modules}
                        name="text"
                        id="text"
                        value={text}
                        onChange={setText}
                    />
                </div>
                {/*
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
                */}
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

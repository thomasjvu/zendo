import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getNotes, reset } from "../features/notes/noteSlice";

import Layout from "../components/Layout"
import NoteItem from "../components/NoteItem";
import NoteForm from "../components/NoteForm";
import Spinner from "../components/Spinner";

function Dashboard() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);
    const { notes, isLoading, isError, message } = useSelector((state) => state.notes);

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }

        dispatch(getNotes());

        return () => {
            dispatch(reset);
        };
    }, [user, navigate, isError, message, dispatch]);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <Layout>
            <div className="dashboard">
                <section className="form-header">
                    <h2 className="form-heading text-4xl">@{user && user.username}</h2>
                    {/* <p className="form-subheading"> ~ Let your mind loose. ~</p> */}
                </section>
                <NoteForm />
                <section className="content">
                    {notes.length > 0 ? (
                        <div className="notes">
                            {notes.map((note) => (
                                <NoteItem className="note-item" key={note._id} note={note} />
                            ))}
                        </div>
                    ) : (
                        <h3>You have no notes.</h3>
                    )}
                </section>
            </div>
        </Layout>
    );
}

export default Dashboard;

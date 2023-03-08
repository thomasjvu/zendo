import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NoteItem from "../components/NoteItem";
import NoteForm from "../components/NoteForm";
import Spinner from "../components/Spinner";
import { getNotes, reset } from "../features/notes/noteSlice";

function Dashboard() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);
    const { notes, isLoading, isError, message } = useSelector(
        (state) => state.notes
    );

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
        <div className="dashboard">
            <section className="form-header">
                <h2 className="form-heading text-4xl">@{user && user.username}</h2>
                <p className="form-subheading"> ~ Let your mind loose. ~</p>
            </section>
            <section className="form-header">
                <p>This form is Markdown enabled... go wild!</p>
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
                    <h3>You have no notes... :( sad face</h3>
                )}
            </section>
        </div>
    );
}

export default Dashboard;

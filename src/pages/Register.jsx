import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { FaUser } from "react-icons/fa";
import { register, reset } from "../features/auth/authSlice";

import Layout from "../components/Layout"
import Spinner from "../components/Spinner";

function Register() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        password2: "",
    });

    const { username, email, password, password2 } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        if(isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (password !== password2) {
            toast.error("Password does not match");
        } else {
            const userData = {
                username,
                email,
                password,
            };

            dispatch(register(userData))
        }
    };


    if(isLoading) {
        return <Spinner />
    }

    return (
        <Layout>
                <section className="flex flex-col items-center justify-center heading my-10">
                    {/* <FaUser /> */}
                    <h1 className="text-4xl">
                         Registration
                    </h1>
                </section>
            <section className="heading">
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            className="form-control"
                            id="username"
                            name="username"
                            value={username}
                            type="text"
                            placeholder="Enter your username"
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            className="form-control"
                            id="email"
                            name="email"
                            value={email}
                            type="email"
                            placeholder="Enter your email"
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            className="form-control"
                            id="password"
                            name="password"
                            value={password}
                            type="password"
                            placeholder="Enter your password"
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password2">Confirm Password</label>
                        <input
                            className="form-control"
                            id="password2"
                            name="password2"
                            value={password2}
                            type="password"
                            placeholder="Confirm your password"
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <button
                            type="submit"
                            className="btn btn-block"
                        >Submit</button>
                    </div>
                </form>
            </section>
        </Layout>
    );
}

export default Register;


import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import {
    CgMenuGridO,
    CgHomeAlt,
    CgLogIn,
    CgLogOut,
    CgUser,
} from "react-icons/cg";
import { useState } from "react";

function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        setIsOpen(false)
        navigate("/");
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false)
    }

    return (
        <div className="hamburger-menu">
            <button onClick={toggleMenu}>
                <span>
                    <CgMenuGridO
                        className="hamburger-icon"
                        width="100"
                        height="100"
                    />
                </span>
            </button>
            {isOpen && (
                <div className="hamburger-menu-open">
                    <ul className="menu-items">
                        <li>
                            <Link to="/" className="action-btn">
                                <CgHomeAlt />
                                Home
                            </Link>
                        </li>
                        {user ? (
                            <li>
                                <button
                                    className="action-btn"
                                    onClick={onLogout}
                                >
                                    <CgLogOut className="" />
                                    Logout
                                </button>
                            </li>
                        ) : (
                            <>
                                <li>
                                    <Link to="/login" className="action-btn" onClick={handleLinkClick}>
                                        <CgLogIn />
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/register" className="action-btn" onCLick={handleLinkClick}>
                                        <CgUser /> Signup
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default HamburgerMenu;

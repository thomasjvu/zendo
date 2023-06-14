import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import {
    CgMenuGridO,
    CgHomeAlt,
    CgLogIn,
    CgLogOut,
    CgUser,
    CgCalendarToday,
    CgBolt,
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
        setIsOpen(false);
        navigate("/");
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <div className="hamburger-menu">
            <CgMenuGridO
                className="hamburger-icon"
                width="100"
                height="100"
                onClick={toggleMenu}
            />
            {isOpen && (
                <div className="hamburger-menu-open">
                    <ul className="menu-items">
                        <li>
                            <Link to="/" className="action-btn text-xl" onClick={handleLinkClick}>
                                <CgHomeAlt />
                                Home
                            </Link>
                        </li>
                        {user ? (
                            <>
                                <li>
                                    <Link
                                        to="/dashboard"
                                        className="action-btn text-xl"
                                        onClick={handleLinkClick}
                                    >
                                        <CgCalendarToday />
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        className="lgoout-btn action-btn text-xl"
                                        onClick={onLogout}
                                    >
                                        <CgLogOut />
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link
                                        to="/login"
                                        className="action-btn text-xl"
                                        onClick={handleLinkClick}
                                    >
                                        <CgLogIn />
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/register"
                                        className="action-btn text-xl"
                                        onClick={handleLinkClick}
                                    >
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

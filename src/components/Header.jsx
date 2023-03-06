import { FaUserAlt, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import HamburgerMenu from "./HamburgerMenu";

function Header() {
    return (
        <header className="header">
            <Link to="/" className="app-logo">
                Zendo
            </Link>
            <h2 className="app-description">Meditation Journaling App</h2>
            <HamburgerMenu />
        </header>
    );
}

export default Header;

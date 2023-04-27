import { FaUserAlt, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import HamburgerMenu from "./HamburgerMenu";

function Header() {
    return (
        <header className="bg-black flex flex-col items-center p-8">
            <Link to="/" className="logo">
                Zendo
            </Link>
            <h2 className="text-white text-xl">Meditation Journal</h2>
            <HamburgerMenu />
        </header>
    );
}

export default Header;

import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

function Header() {
    return (
        <header className="bg-black flex flex-col items-center justify-center">
            <Link to="/" className="logo">
                Zendo
            </Link>
            <h2 className="text-white text-md sm:text-lg">Meditation Journal</h2>
            <HamburgerMenu />
        </header>
    );
}

export default Header;

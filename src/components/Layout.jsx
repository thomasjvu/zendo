import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header className="grow-0"/>
            <main className="grow-1">{children}</main>
            <Footer className="grow-0"/>
        </div>
    );
};

export default Layout;

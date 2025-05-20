import { Link } from "react-router";
import { CiShoppingCart } from "react-icons/ci";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import "../style/components/_navBar.scss";

export default function NavBar() {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div>
            <nav className="navbar">
                <img src="logo.png" alt="Logo" />
                <ul className="links">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/Shop"}>Shop</Link>
                    <Link to={"/Blog"}>Blog</Link>
                    <Link to={"/About Us"}>About Us</Link>
                    <Link to={"/Contact Us"}>Contact Us</Link>
                    <Link to={"/Login"}>Login</Link>
                </ul>
                <IoMenu className="menu_bar" onClick={() => setShowSidebar(true)} />
                <div className="wcicon">
                    <CiShoppingCart/>
                    <div className="cart">
                        <div className="cart_number">0</div>
                    </div>
                </div>
            </nav>
            {showSidebar && (
                <div className="sidebar">
                    <IoClose className="close_icon" onClick={() => setShowSidebar(false)} />
                    <Link to={"/"} onClick={() => setShowSidebar(false)}>
                        Home
                    </Link>
                    <Link to={"/Shop"} onClick={() => setShowSidebar(false)}>
                        Shop
                    </Link>
                    <Link to={"/Blog"} onClick={() => setShowSidebar(false)}>
                        Blog
                    </Link>
                    <Link to={"/About Us"} onClick={() => setShowSidebar(false)}>
                        About Us
                    </Link>
                    <Link to={"/Contact Us"} onClick={() => setShowSidebar(false)}>
                        Contact Us
                    </Link>
                    <Link to={"/Login"} onClick={() => setShowSidebar(false)}>
                        Login
                    </Link>
                </div>
            )}
        </div>
    );
}

import React from "react";
import { Link, useLocation } from "react-router-dom";
const Footer = () => {
    const location = useLocation();
    return (
        <footer>
            <p>Assylniyet &copy; 2022</p>

            {location.pathname !== "/about" && (
                <Link className="link" to="/about">
                    Подробнее
                </Link>
            )}
        </footer>
    );
};
export default Footer;

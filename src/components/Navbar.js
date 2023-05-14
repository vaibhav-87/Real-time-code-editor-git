import React from "react";
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
            <div id="navbar">
                <div class="logo">Logo</div>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>More</li>
                    </ul>
                </div>
                <form action="/room" method="POST">
                    <div class="signUp">
                        <Link class="nav_btn" to="/createuser" >Register</Link>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Navbar;
import React from "react";

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
                <div class="signUp">
                    <button class="nav_btn">Sign-up</button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
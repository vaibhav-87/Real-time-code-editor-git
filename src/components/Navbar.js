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
                <form action="/room" method="POST">
                    <div class="signUp">
                        <button class="nav_btn">Register</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Navbar;
import {useState, useEffect} from "react";
export function NavBar() {
    return (
        <>
            <nav className="navbar">
                <ul className="navbar__list">
                    <li className="navbar__item--home">Home</li>
                    <li className="navbar__item--about">About</li>
                    <li className="navbar__item--skills">Skills</li>
                    <li className="navbar__item--projects">Projects</li>
                    <li className="navbar__item--contact">Contact</li>
                </ul>
            </nav>;
        </>
    )
}

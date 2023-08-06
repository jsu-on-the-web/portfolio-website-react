import { useState, useEffect } from "react";
import styles from "./NavBar.module.scss";
export function NavBar() {
    return (
        <>
            <nav className={styles["navbar"]}>
                <ul className="navbar__list flex">
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

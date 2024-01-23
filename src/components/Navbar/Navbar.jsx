import React from "react";
import styles from "./Navbar.module.css";
import Links from "./links/Links";
import UserActions from "./user-actions/UserActions";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.links}>
                <Links></Links>
            </div>
            <div className={styles.user}>
                <UserActions></UserActions>
            </div>
        </div>
    );
};

export default Navbar;

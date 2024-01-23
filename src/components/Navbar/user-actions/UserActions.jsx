import React from "react";
import Image from "next/image";
import styles from "./UserActions.module.css";
import { Avatar } from "@mui/material";

const UserActions = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.img}>
                    <Image
                        src={"/info.svg"}
                        alt="image"
                        width={25}
                        height={25}
                    />
                </div>
                <div className={styles.text}>{"Help"}</div>
            </div>
            <div className={styles.item}>
                <div className={styles.img}>
                    <Image
                        src={"/invite-user.svg"}
                        alt="image"
                        width={25}
                        height={25}
                    />
                </div>
                <div className={styles.text}>{"Invite"}</div>
            </div>
            <div className={styles.item}>
                <Avatar>PD</Avatar>
            </div>
        </div>
    );
};

export default UserActions;

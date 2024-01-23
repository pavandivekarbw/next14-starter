"use client";
import React from "react";
import Image from "next/image";
import styles from "./Links.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Workspaces",
        path: "/workspaces",
    },
    {
        name: "Flow",
        path: "/flow",
    },
    {
        name: "chat",
        path: "/chat",
    },
    {
        name: "Ripple",
        path: "/ripple",
    },
    {
        name: "Ripple Log",
        path: "/ripple-log",
    },
];

const Links = () => {
    const pathName = usePathname();
    return (
        <>
            <Link href={"/"} className={styles.container}>
                <div className={styles.img}>
                    <Image
                        src={`/Logo.svg`}
                        alt="image"
                        width={25}
                        height={25}
                    />
                </div>
            </Link>
            {links.map((link) => (
                <Link
                    href={link.path}
                    className={`${styles.container} ${
                        pathName === link.path ? styles.active : ""
                    }`}
                    key={link.name}
                >
                    <div className={styles.img}>
                        <Image
                            src={`${link.path}-white.svg`}
                            alt="image"
                            width={25}
                            height={25}
                        />
                    </div>
                    <div className={styles.text}>{link.name}</div>
                </Link>
            ))}
        </>
    );
};

export default Links;

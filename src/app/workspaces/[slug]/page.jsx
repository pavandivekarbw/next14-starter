import React from "react";
import styles from "./spaces.module.css";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";

const getAPIData = async (workspaceId) => {
    const res = await fetch(
        `http://localhost:3001/BW_UNITY_CENTRAL_QA/rest/workspace/spaceList?workspaceId=${workspaceId}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "basic:YXNoaXNoLmJhbHVqYUBib2FyZHdhbGt0ZWNoLmNvbTowOkJvYXJkd2Fsa3RlY2h8SW50ZXJuYWx8RW5naW5lZXJpbmd8MTAyNA==",
            },
        }
    );
    const data = await res.json();
    return data;
};
const Spaces = async ({ params, searchParams }) => {
    const data = await getAPIData(params.slug);
    return (
        <div className={styles.container}>
            <div className={styles.breadcrumb}>breadcrumb</div>
            <div className={styles.actionItems}>actionItems</div>
            <div className={styles.tableContainer}>
                {!searchParams.spaceId ? (
                    <div className={styles.table}>
                        {data.map((item) => (
                            <div className={styles.row} key={item.spaceId}>
                                <div className={styles.cell}>
                                    <Checkbox />
                                </div>
                                <div className={styles.cell}>
                                    <Link
                                        href={`/workspaces/${params.slug}?spaceId=${item.spaceId}`}
                                        className={styles.cell}
                                    >
                                        {item.spaceName}
                                    </Link>
                                </div>
                                <div className={styles.cell}>
                                    {item.isStarred}
                                </div>
                                <div className={styles.cell}>
                                    {item.updatedOn}
                                </div>
                                <div className={styles.cell}>
                                    {item.createdOn}
                                </div>
                                <div className={styles.cell}>
                                    {item.isShared}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Spaces;

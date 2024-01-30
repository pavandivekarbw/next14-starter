import React from "react";
import styles from "./Workspaces.module.css";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import "../globals.css";

const getAPIData = async () => {
    const res = await fetch(
        "http://localhost:3001/BW_UNITY_CENTRAL_QA/rest/workspace/workspaceList",
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
const Workspaces = async () => {
    const data = await getAPIData();
    return (
        <div className={styles.container}>
            <div className={styles.breadcrumb}>
                <Breadcrumb></Breadcrumb>
            </div>
            <div className={styles.actionItems}>actionItems</div>
            <div className={styles.tableContainer}>
                <div className={styles.table}>
                    {data.map((item) => (
                        <div className={styles.row} key={item.workspaceId}>
                            <div className={styles.cell}>
                                <Checkbox />
                            </div>
                            <div className={styles.cell}>
                                <Link
                                    href={`/workspaces/${item.workspaceId}`}
                                    className="custom-links"
                                >
                                    {item.workspaceName}
                                </Link>
                            </div>
                            <div className={styles.cell}>
                                {item.workspaceType}
                            </div>
                            <div className={styles.cell}>{item.updatedOn}</div>
                            <div className={styles.cell}>{item.createdOn}</div>
                            <div className={styles.cell}>{item.sharedBy}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Workspaces;

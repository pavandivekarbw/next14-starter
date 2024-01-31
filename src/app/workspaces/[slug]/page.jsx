import React from "react";
import styles from "./spaces.module.css";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";

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
const getSpaceData = async (spaceId, folderId) => {
    const res = await fetch(
        `http://localhost:3001/BW_UNITY_CENTRAL_QA/rest/spacePersistence/folderData?spaceId=${spaceId}&folderId=${
            folderId || "0"
        }`,
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
    // return data;
    const spaceData = [];
    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
            const element = data[key];
            spaceData.push({ ...element, id: parseInt(key) });
        }
    }
    return spaceData;
};
const Spaces = async ({ params, searchParams }) => {
    const data = await getAPIData(params.slug);
    let spaceData = null;
    if (searchParams.spaceId) {
        spaceData = await getSpaceData(
            searchParams.spaceId,
            searchParams.folderId
        );
    }
    return (
        <div className={styles.container}>
            <div className={styles.breadcrumb}>
                <Breadcrumb
                    workspace={params.slug}
                    space={searchParams.spaceId}
                    folderId={searchParams.folderId}
                ></Breadcrumb>
            </div>
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
                                        className={`${styles.cell} custom-links`}
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
                ) : (
                    <div className={styles.table}>
                        {spaceData.map((item) => (
                            <div className={styles.row} key={item.id}>
                                <div className={styles.cell}>
                                    <Checkbox />
                                </div>
                                <div className={styles.cell}>
                                    <Link
                                        href={`/workspaces/${params.slug}?spaceId=${searchParams.spaceId}&&folderId=${item.id}`}
                                        className={`${styles.cell} custom-links`}
                                    >
                                        {item.objectName}
                                    </Link>
                                </div>
                                <div className={styles.cell}>
                                    {item.isStarred}
                                </div>
                                <div className={styles.cell}>
                                    {item.isShared}
                                </div>
                                <div className={styles.cell}>
                                    {item.createdOn}
                                </div>
                                <div className={styles.cell}>
                                    {item.updatedOn}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Spaces;

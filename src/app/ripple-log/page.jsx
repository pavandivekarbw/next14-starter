import React from "react";
import style from "./ripple-log.module.css";
import RippleHeader from "./RippleHeader";

const getAPIData = async () => {
    const res = await fetch(
        "http://localhost:3001/BW_UNITY_CENTRAL_QA/rest/ripple/rippleRegistry",
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
const RippleLog = async () => {
    const data = await getAPIData();
    return (
        <div className={style.container}>
            <div className={style.toolbar}>
                <RippleHeader></RippleHeader>
            </div>
            <div className={style.tableContainer}>
                <div className={style.tableHeader}>
                    <div className={style.headerCell}>Ripple Name</div>
                    <div className={style.headerCell}>Date</div>
                    <div className={style.headerCell}>Ripple Search</div>
                </div>
                <div style={{ overflowY: "auto", overflowX: "hidden" }}>
                    <div className={style.tableBody}>
                        {data.map((rippleLog) => (
                            <div
                                className={style.row}
                                key={rippleLog.rippleRegistryId}
                            >
                                <div className={style.cell}>
                                    {rippleLog.rippleName || "Unsaved Ripple"}
                                </div>
                                <div className={style.cell}>
                                    {rippleLog.updatedOn}
                                </div>
                                <div className={style.cell}>
                                    {rippleLog.searchCriteria}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RippleLog;

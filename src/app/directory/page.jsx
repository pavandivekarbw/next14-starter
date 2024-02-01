import React from "react";
import style from "./directory.module.css";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ListIcon from "@mui/icons-material/List";
import GridViewIcon from "@mui/icons-material/GridView";
import Table from "@/components/table/Table";

const getAPIData = async () => {
    const res = await fetch(
        "http://localhost:3001/BW_UNITY_CENTRAL_QA/rest/directory/user/list?directoryId=117816",
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
const Directory = async () => {
    const data = await getAPIData();
    return (
        <div className={style.container}>
            <div className={style.header}>Directory</div>
            <div className={style.actions}>
                <div className={style.search}>
                    <input
                        type="text"
                        placeholder="search"
                        className={style.input}
                    />
                    <span className={style.icon}>
                        <SearchIcon />
                    </span>
                </div>
                <div className={style.rightActions}>
                    <div>
                        <ListIcon color="primary"></ListIcon>
                    </div>
                    <div>
                        <GridViewIcon color="primary"></GridViewIcon>
                    </div>
                    <div>
                        <Button
                            variant="contained"
                            startIcon={<PersonOutlineIcon />}
                            sx={{
                                textTransform: "none",
                            }}
                            size="small"
                        >
                            Invite User
                        </Button>
                    </div>
                </div>
            </div>
            <Table data={data} showPagination={true} />
        </div>
    );
};

export default Directory;

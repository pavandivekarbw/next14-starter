"use client";
import React from "react";
import Divider from "@mui/material/Divider";
import TablePagination from "@mui/material/TablePagination";
import style from "./Table.module.css";

const Table = ({ data, showPagination }) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [tableRows, setTableRows] = React.useState([]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    React.useEffect(() => {
        setTableRows(data);
    }, [data]);
    React.useEffect(() => {
        if (!showPagination) return;
        setTableRows(
            data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        );
    }, [page, rowsPerPage]);

    return (
        <>
            <div className={style.tableContainer}>
                <div className={style.tableHeader}>
                    <div className={style.headerCell}>Name</div>
                    <div className={style.headerCell}>Email</div>
                    <div className={style.headerCell}>Internal/External</div>
                    <div className={style.headerCell}>Remove</div>
                </div>
                <div className="invisibleScroller">
                    <div className={style.tableBody}>
                        {tableRows.map((user) => (
                            <>
                                <div
                                    className={style.row}
                                    key={user.directoryUserRegistryId}
                                >
                                    <div className={style.cell}>
                                        {user.firstName}
                                    </div>
                                    <div className={style.cell}>
                                        {user.emailAddress}
                                    </div>
                                    <div className={style.cell}>
                                        {user.userType}
                                    </div>
                                    <div className={style.cell}>{"delete"}</div>
                                </div>
                                <Divider key={user.directoryUserRegistryId} />
                            </>
                        ))}
                    </div>
                </div>
            </div>
            <div className={style.pagination}>
                {showPagination && (
                    <TablePagination
                        component="div"
                        count={100}
                        page={page}
                        onPageChange={handleChangePage}
                        rowsPerPage={rowsPerPage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                )}
            </div>
        </>
    );
};

export default Table;

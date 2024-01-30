/* eslint-disable jsx-a11y/anchor-is-valid */
"use client";
import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useDispatch, useSelector } from "react-redux";
import { push, update } from "@/redux/workspace/breadcrumbSlice";

export default function Breadcrumb({ workspace, space }) {
    const dispatch = useDispatch();
    const breadcrumb = useSelector((state) => state.breadcrumb);

    React.useEffect(() => {
        if (!breadcrumb.length && workspace) {
            dispatch(push(workspace));
        }
        if (breadcrumb.length === 1 && space) {
            dispatch(push(space));
        }
    }, [workspace, space]);
    function handleClick(event, options) {
        event.preventDefault();
        dispatch(update(options));
    }
    return (
        <div role="presentation">
            <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                {breadcrumb.map((item, index) => {
                    if (index === breadcrumb.length - 1) {
                        return (
                            <Typography color="text.primary" key={item}>
                                {item}
                            </Typography>
                        );
                    }
                    return (
                        <Link
                            underline="hover"
                            key={item}
                            color="inherit"
                            href="#"
                            onClick={(e) => handleClick(e, index)}
                        >
                            {item}
                        </Link>
                    );
                })}
            </Breadcrumbs>
        </div>
    );
}

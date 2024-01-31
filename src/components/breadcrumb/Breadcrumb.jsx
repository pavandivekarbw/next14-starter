/* eslint-disable jsx-a11y/anchor-is-valid */
"use client";
import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useDispatch, useSelector } from "react-redux";
import { push, replace, update } from "@/redux/workspace/breadcrumbSlice";
import { useRouter } from "next/navigation";

export default function Breadcrumb({ workspace, space, folderId }) {
    const dispatch = useDispatch();
    const breadcrumb = useSelector((state) => state.breadcrumb);
    const router = useRouter();

    React.useEffect(() => {
        if (breadcrumb.length > 1 && folderId) {
            if (breadcrumb[breadcrumb.length - 1] !== folderId)
                dispatch(push(folderId));
        }
        if (breadcrumb.length === 1) {
            if (workspace && space && !folderId) {
                dispatch(replace([workspace, space]));
            } else if (workspace && space && folderId) {
                dispatch(replace([workspace, space, folderId]));
            }
        }
        if (!breadcrumb.length) {
            if (workspace && !space && !folderId) {
                dispatch(push(workspace));
            } else if (workspace && space && !folderId) {
                dispatch(replace([workspace, space]));
            } else if (workspace && space && folderId) {
                dispatch(replace([workspace, space, folderId]));
            }
        }
    }, [workspace, space, folderId]);
    function handleClick(event, options) {
        event.preventDefault();
        dispatch(update(options));
        if (options === 0) {
            router.push(`/workspaces/${breadcrumb[options]}`);
        }
        if (options === 1) {
            router.push(
                `/workspaces/${breadcrumb[0]}?spaceId=${breadcrumb[options]}`
            );
        }
        if (options > 1) {
            router.push(
                `/workspaces/${breadcrumb[0]}?spaceId=${breadcrumb[1]}&&folderId=${breadcrumb[options]}`
            );
        }
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

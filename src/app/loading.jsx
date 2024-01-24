import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import "./globals.css";
export default function Loading() {
    return (
        <Dialog open>
            <CircularProgress />
        </Dialog>
    );
}

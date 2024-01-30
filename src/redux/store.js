"use client";
import { configureStore } from "@reduxjs/toolkit";
import breadcrumbReducer from "../redux/workspace/breadcrumbSlice";

export const store = configureStore({
    reducer: {
        breadcrumb: breadcrumbReducer,
    },
});

export default store;

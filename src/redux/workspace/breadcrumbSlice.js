"use client";

import { createSlice } from "@reduxjs/toolkit";

const breadcrumbSlice = createSlice({
    name: "breadcrumb",
    initialState: [],
    reducers: {
        push: (state, action) => {
            state.push(action.payload);
        },
        pop: (state) => {
            state.pop();
        },
        replace: (state, action) => {
            state.splice(0, state.length, ...action.payload);
        },
        update: (state, action) => {
            state.splice(action.payload + 1);
        },
    },
});

export const { push, pop, replace, update } = breadcrumbSlice.actions;
export default breadcrumbSlice.reducer;

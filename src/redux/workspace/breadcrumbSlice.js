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
        update: (state, action) => {
            state.splice(action.payload + 1);
        },
    },
});

export const { push, pop, update } = breadcrumbSlice.actions;
export default breadcrumbSlice.reducer;

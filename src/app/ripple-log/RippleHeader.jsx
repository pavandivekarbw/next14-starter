import React from "react";
import styled from "./ripple-log.module.css";
import Dropdown from "@/components/dropdown/Dropdown";

const RippleHeader = () => {
    return (
        <div className={styled.rippleHeader}>
            <div className={styled.dropdown}>
                <Dropdown></Dropdown>
            </div>
            <div className={styled.actions}>actions</div>
        </div>
    );
};

export default RippleHeader;

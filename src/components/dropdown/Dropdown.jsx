"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    components: {
        // Name of the component ⚛️
        MuiSelect: {
            styleOverrides: {
                // Name of the slot
                select: {
                    // Some CSS
                    padding: "8px",
                    ":hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.04)",
                    },
                },
                outlined: {
                    border: "none",
                },
                nativeInput: {
                    border: "none",
                },
            },
        },
    },
});
export default function Dropdown() {
    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <ThemeProvider theme={theme}>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        displayEmpty
                        onChange={handleChange}
                        inputProps={{ "aria-label": "Without label" }}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </ThemeProvider>
            </FormControl>
        </Box>
    );
}

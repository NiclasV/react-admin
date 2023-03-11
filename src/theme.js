import { createContext, useMemo, useState } from "react";
import { createTheme } from '@mui/material/styles';

/* Theme-color tokens */
export const tokens = (mode) => ({
    ...(mode === "dark"
        ? {
            gray: {
                100: "#dbdfe2",
                200: "#b7bec6",
                300: "#949ea9",
                400: "#707d8d",
                500: "#4c5d70",
                600: "#3d4a5a",
                700: "#2e3843",
                800: "#1e252d",
                900: "#0f1316"
            },
            primary: {
                100: "#fde0dd",
                200: "#fbc1bb",
                300: "#faa199",
                400: "#f88277",
                500: "#f66355",
                600: "#c54f44",
                700: "#943b33",
                800: "#622822",
                900: "#311411"
            },
            yellowAccent: {
                100: "#fdefd9",
                200: "#fae0b2",
                300: "#f8d08c",
                400: "#f5c165",
                500: "#f3b13f",
                600: "#c28e32",
                700: "#926a26",
                800: "#614719",
                900: "#31230d"
            },
            tealAccent: {
                100: "#e0eef5",
                200: "#c1deeb",
                300: "#a2cde2",
                400: "#83bdd8",
                500: "#64acce",
                600: "#508aa5",
                700: "#3c677c",
                800: "#284552",
                900: "#142229"
            },
            greenAccent: {
                100: "#def0f2",
                200: "#bee1e4",
                300: "#9dd1d7",
                400: "#7dc2c9",
                500: "#5cb3bc",
                600: "#4a8f96",
                700: "#376b71",
                800: "#25484b",
                900: "#122426"
            },  
        } : {
            gray: {
                100: "#0f1316",
                200: "#1e252d",
                300: "#2e3843",
                400: "#3d4a5a",
                500: "#4c5d70",
                600: "#707d8d",
                700: "#949ea9",
                800: "#b7bec6",
                900: "#dbdfe2"
            },
            primary: {
                100: "#311411",
                200: "#622822",
                300: "#943b33",
                400: "#c54f44",
                500: "#f66355",
                600: "#f88277",
                700: "#faa199",
                800: "#fbc1bb",
                900: "#fde0dd"
            },
            yellowAccent: {
                100: "#31230d",
                200: "#614719",
                300: "#926a26",
                400: "#c28e32",
                500: "#f3b13f",
                600: "#f5c165",
                700: "#f8d08c",
                800: "#fae0b2",
                900: "#fdefd9",
            },
            tealAccent: {
                100: "#142229",
                200: "#284552",
                300: "#3c677c",
                400: "#508aa5",
                500: "#64acce",
                600: "#83bdd8",
                700: "#a2cde2",
                800: "#c1deeb",
                900: "#e0eef5"
            },
            greenAccent: {
                100: "#122426",
                200: "#25484b",
                300: "#376b71",
                400: "#4a8f96",
                500: "#5cb3bc",
                600: "#7dc2c9",
                700: "#9dd1d7",
                800: "#bee1e4",
                900: "#def0f2",
            },   
        }
    ),
});

//Mui theme settings
export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                    primary: {
                        main: colors.primary[500],
                    },
                    secondary: {
                        main: colors.yellowAccent[500],
                    },
                    neutral: {
                        dark: colors.gray[700],
                        main: colors.gray[500],
                        light: colors.gray[100],
                    },
                    background: {
                        default: colors.gray[800]
                    }
                } : {
                    primary: {
                        main: colors.primary[200],
                    },
                    secondary: {
                        main: colors.yellowAccent[500],
                    },
                    neutral: {
                        dark: colors.gray[700],
                        main: colors.gray[500],
                        light: colors.gray[100],
                    },
                    background: {
                        default: "#FCFCFC"
                    }
                }),
        },
        typography: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 38,
                fontWeight: "bold"
            },
            h2: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 28,
            },
            h3: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 22,
            },
            h4: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 1,
            },
            h6: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 14,
            }
        }
    }
};

//context for color-mode
export const ColorModeContext = createContext({
    toggleColorMode: () => {}
});

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => 
                setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
    )

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

    return [theme, colorMode];
}
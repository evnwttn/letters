import { createTheme } from "@mui/material";
import { palette } from ".";

export const theme = createTheme({
  palette: {
    primary: {
      main: palette.white,
    },
    secondary: {
      main: palette.black,
    },
    error: {
      main: palette.red,
    },
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: palette.black,
          "&:hover": {
            background: "none",
            opacity: "0.8",
            cursor: "pointer",
          },
        },
      },
    },
  },
});

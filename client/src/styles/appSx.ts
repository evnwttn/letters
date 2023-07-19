import { palette } from ".";

export const appSx = {
  wrap: {
    display: "flex",
    flexFlow: "row nowrap",
    width: "100%",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    flexFlow: "column nowrap",
    mt: "12vw",
  },
  header: {
    color: palette.blue,
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    fontFamily: "owners-wide, sans-serif",
    fontWeight: 700,
    fontSize: "2vw",
  },
  box: {
    backgroundColor: palette.white,
    padding: "2.5vw",
    border: `1px solid ${palette.black}`,
  },
};

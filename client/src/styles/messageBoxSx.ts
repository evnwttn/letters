import { palette } from ".";

export const messageBoxSx = {
  wrap: {
    width: "32vw",
    fontSize: "1.05vw",
  },
  textBox: {
    padding: "1vw",
    mt: "1vw",
    mb: "1.5vw",
    width: "30vw",
    backgroundColor: palette.sand,
    border: `1px solid  ${palette.black}`,
  },
  iconDiv: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    width: "100%",
  },
  icon: {
    svg: {
      color: palette.black,
      fontSize: "1.5vw",
      "&:hover": {
        background: "none",
        color: palette.yellow,
        cursor: "pointer",
      },
    },
  },
};

import { palette } from ".";

export const formSx = {
  formMessage: {
    mb: "1.5vw",
    fontSize: "1.05vw",
    width: "32vw",
  },
  textFieldDiv: {
    display: "flex",
    flexFlow: "column nowrap",
    width: "32vw",
  },
  nameField: {
    mb: "1.5vw",
    width: "32vw",
  },
  messageField: {
    mb: "1.5vw",
    width: "32vw",
  },
  button: {
    color: palette.black,
    textTransform: "capitalize",
    mr: "0.5vw",
    fontSize: "1.05vw",
    "&:hover": {
      background: "none",
      color: palette.yellow,
      cursor: "pointer",
    },
  },
};

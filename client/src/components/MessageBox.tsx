import { Box } from "@mui/material";
import { MessageBoxProps } from "../types";

export const MessageBox = ({ recievedLetter }: MessageBoxProps) => {
  return (
    <Box>
      {recievedLetter ? (
        <Box>
          <Box>Name: {recievedLetter.name}</Box>
          <Box>Message: {recievedLetter.message}</Box>
        </Box>
      ) : (
        <Box>Your letter was lost in the mail... ✉</Box>
      )}
    </Box>
  );
};

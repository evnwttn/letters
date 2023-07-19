import { Box, IconButton } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import { MessageBoxProps } from "../types";

export const MessageBox = ({
  recievedLetter,
  setSubmittedLetter,
  setRecievedLetter,
  setFormMessage,
}: MessageBoxProps) => {
  const handleReset = () => {
    setSubmittedLetter(false);
    setRecievedLetter(undefined);
    setFormMessage("Leave your name and message below ✉");
  };

  return (
    <Box>
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
      <IconButton id="reset-button" onClick={handleReset}>
        <ReplayIcon />
      </IconButton>
    </Box>
  );
};

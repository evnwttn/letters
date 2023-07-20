import { Box, IconButton } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import { MessageBoxProps } from "../types";
import { messageBoxSx } from "../styles";

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
    <Box sx={messageBoxSx.wrap}>
      <Box>
        {recievedLetter ? (
          <Box>
            <Box>
              Name
              <Box sx={messageBoxSx.textBox}>{recievedLetter.name}</Box>
            </Box>
            <Box>
              Message
              <Box sx={messageBoxSx.textBox}>{recievedLetter.message}</Box>
            </Box>
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

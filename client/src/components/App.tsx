import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { MessageBox, Form } from ".";
import { GetLetterHandlerProps, Letter } from "../types";
import { getLetterHandler } from "../handlers";
import { appSx } from "../styles";

export const App = () => {
  const [submittedLetter, setSubmittedLetter] = useState<boolean>(false);
  const [recievedLetter, setRecievedLetter] = useState<Letter | undefined>();
  const [formMessage, setFormMessage] = useState<string>(
    "Leave your name and message below... ✉"
  );

  useEffect(() => {
    if (submittedLetter) {
      getLetterHandler({
        setRecievedLetter,
        setFormMessage,
      } as GetLetterHandlerProps);
    }
  }, [submittedLetter]);

  return (
    <Box sx={appSx.wrap}>
      <Box sx={appSx.container}>
        <Box sx={appSx.header}>letters ✉</Box>
        <Box sx={appSx.box}>
          {recievedLetter ? (
            <MessageBox
              recievedLetter={recievedLetter}
              setSubmittedLetter={setSubmittedLetter}
              setRecievedLetter={setRecievedLetter}
              setFormMessage={setFormMessage}
            />
          ) : (
            <Form
              setSubmittedLetter={setSubmittedLetter}
              formMessage={formMessage}
              setFormMessage={setFormMessage}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

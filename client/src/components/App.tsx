import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { MessageBox, Form } from ".";
import { Letter } from "../types";

export const App = () => {
  const [submittedLetter, setSubmittedLetter] = useState<boolean>(false);
  const [recievedLetter, setRecievedLetter] = useState<Letter | undefined>();

  useEffect(() => {
    console.log(submittedLetter);
  }, [submittedLetter]);

  useEffect(() => {
    console.log(recievedLetter);
  }, [recievedLetter]);

  return (
    <Box>
      <Box>
        {recievedLetter ? (
          <MessageBox recievedLetter={recievedLetter} />
        ) : (
          <Form setSubmittedLetter={setSubmittedLetter} />
        )}
      </Box>
    </Box>
  );
};

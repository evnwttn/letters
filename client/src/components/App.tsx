import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { MessageBox, Form } from ".";
import { GetLetterHandlerProps, Letter } from "../types";
import { getLetterHandler } from "../handlers";

export const App = () => {
  const [submittedLetter, setSubmittedLetter] = useState<boolean>(false);
  const [recievedLetter, setRecievedLetter] = useState<Letter | undefined>();

  useEffect(() => {
    if (submittedLetter) {
      getLetterHandler({ setRecievedLetter } as GetLetterHandlerProps);
    }
  }, [submittedLetter]);

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

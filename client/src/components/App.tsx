import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { MessageBox, Form } from ".";
import { GetLetterHandlerProps, Letter } from "../types";
import { getLetterHandler } from "../handlers";

export const App = () => {
  const [submittedLetter, setSubmittedLetter] = useState<boolean>(false);
  const [recievedLetter, setRecievedLetter] = useState<Letter | undefined>();
  const [formMessage, setFormMessage] = useState<string>(
    "Leave your name and message below ✉"
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
    <Box>
      <Box>
        {recievedLetter ? (
          <MessageBox recievedLetter={recievedLetter} />
        ) : (
          <Form
            setSubmittedLetter={setSubmittedLetter}
            formMessage={formMessage}
            setFormMessage={setFormMessage}
          />
        )}
      </Box>
    </Box>
  );
};

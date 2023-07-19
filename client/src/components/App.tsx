import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { MessageBox, Form } from ".";
import { Submission } from "../types";

export const App = () => {
  const [recievedSubmission, setRecievedSubmission] = useState<
    Submission | undefined
  >();

  useEffect(() => {
    console.log(recievedSubmission);
  }, [recievedSubmission]);

  return (
    <Box>
      <Box>
        {recievedSubmission ? (
          <MessageBox recievedSubmission={recievedSubmission} />
        ) : (
          <Form setRecievedSubmission={setRecievedSubmission} />
        )}
      </Box>
    </Box>
  );
};

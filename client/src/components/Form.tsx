import { useState, useRef } from "react";
import { Box, TextField, Button } from "@mui/material";
import { FormProps, Letter, SubmitLetterHandlerProps } from "../types";
import { validateName, validateMessage } from "../utilities";
import { submitLetterHandler } from "../handlers/submitLetterHandler";
import { formSx } from "../styles";

export const Form = ({
  setSubmittedLetter,
  formMessage,
  setFormMessage,
}: FormProps) => {
  const [submitting, toggleSubmitting] = useState<boolean>(false);
  const [nameFieldError, setNameFieldError] = useState<boolean>(false);
  const [messageFieldError, setMessageFieldError] = useState<boolean>(false);
  const nameField = useRef<HTMLInputElement>();
  const messageField = useRef<HTMLInputElement>();

  const onSubmit = ({ name, message }: Letter) => {
    if (!validateName(name)) {
      setFormMessage(
        "Names must be between 1-35 characters, and contain no special characters ($%&@#) or numbers..."
      );

      setNameFieldError(true);

      return;
    }

    if (!validateMessage(message)) {
      setFormMessage(
        "Messages must be less than 280 characters and not contain the phrase 'chicken tenders'..."
      );

      setMessageFieldError(true);

      return;
    }

    submitLetterHandler({
      letter: { name, message },
      setFormMessage,
      toggleSubmitting,
      setSubmittedLetter,
    } as SubmitLetterHandlerProps);
  };

  return (
    <Box>
      <Box sx={formSx.formMessage}>{formMessage}</Box>
      <Box sx={formSx.textFieldDiv}>
        <TextField
          disabled={submitting}
          error={nameFieldError}
          label={"Name"}
          id="name-field"
          inputRef={nameField}
          variant="outlined"
          sx={formSx.nameField}
        />
        <TextField
          disabled={submitting}
          error={messageFieldError}
          label={"Message"}
          id="message-field"
          inputRef={messageField}
          variant="outlined"
          multiline
          maxRows={3}
          sx={formSx.messageField}
        />
        <Button
          disabled={submitting}
          disableRipple
          id="submit-email"
          sx={formSx.button}
          onClick={() =>
            onSubmit({
              name: nameField.current?.value ?? "no name",
              message: messageField.current?.value ?? "no message",
            } as Letter)
          }
        >
          <Box>Send ✉</Box>
        </Button>
      </Box>
    </Box>
  );
};

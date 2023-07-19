import { useState, useRef } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { FormProps, Letter, SubmitLetterHandlerProps } from "../types";
import { validateName, validateMessage } from "../utilities";
import { submitLetterHandler } from "../handlers/submitLetterHandler";

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
        "Names must be between 1-35 characters, and contain no special characters ($%&@#) or numbers ✉"
      );

      setNameFieldError(true);

      return;
    }

    if (!validateMessage(message)) {
      setFormMessage(
        "Messages must be less than 280 characters and not contain the phrase 'chicken tenders' ✉"
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
      <Box>
        <Box>
          <Box>{formMessage}</Box>
          <TextField
            disabled={submitting}
            error={nameFieldError}
            label={"Name"}
            id="name-field"
            inputRef={nameField}
            variant="outlined"
          />
          <TextField
            disabled={submitting}
            error={messageFieldError}
            label={"Message"}
            id="message-field"
            inputRef={messageField}
            variant="outlined"
          />
          <IconButton
            disabled={submitting}
            id="submit-email"
            onClick={() =>
              onSubmit({
                name: nameField.current?.value ?? "no name",
                message: messageField.current?.value ?? "no message",
              } as Letter)
            }
          >
            <AddCircleOutlineOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

import { SubmissionHandlerProps } from "../types";

export const submissionHandler = async ({
  submission,
  setFormMessage,
  toggleSubmitting,
}: SubmissionHandlerProps) => {
  console.log({ submission, setFormMessage, toggleSubmitting });
};

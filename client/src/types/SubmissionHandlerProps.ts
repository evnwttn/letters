import { Dispatch, SetStateAction } from "react";
import { Submission } from ".";

export interface SubmissionHandlerProps {
  submission: Submission;
  setFormMessage: Dispatch<SetStateAction<string>>;
  toggleSubmitting: Dispatch<SetStateAction<boolean>>;
  setRecievedSubmission: Dispatch<SetStateAction<Submission | undefined>>;
}

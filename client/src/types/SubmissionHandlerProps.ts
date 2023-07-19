import { Submission } from ".";

export interface SubmissionHandlerProps {
  submission: Submission;
  setFormMessage: React.Dispatch<React.SetStateAction<string>>;
  toggleSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
}

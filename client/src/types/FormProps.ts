import { Dispatch, SetStateAction } from "react";
import { Submission } from ".";

export interface FormProps {
  setRecievedSubmission: Dispatch<SetStateAction<Submission | undefined>>;
}

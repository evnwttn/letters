import { Dispatch, SetStateAction } from "react";

export interface FormProps {
  setSubmittedLetter: Dispatch<SetStateAction<boolean>>;
}

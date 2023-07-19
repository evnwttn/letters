import { Dispatch, SetStateAction } from "react";
import { Letter } from ".";

export interface SubmitLetterHandlerProps {
  letter: Letter;
  setFormMessage: Dispatch<SetStateAction<string>>;
  toggleSubmitting: Dispatch<SetStateAction<boolean>>;
  setRecievedLetter: Dispatch<SetStateAction<Letter | undefined>>;
}

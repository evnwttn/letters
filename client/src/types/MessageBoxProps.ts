import { Dispatch, SetStateAction } from "react";
import { Letter } from ".";

export interface MessageBoxProps {
  recievedLetter: Letter | undefined;
  setSubmittedLetter: Dispatch<SetStateAction<boolean>>;
  setRecievedLetter: Dispatch<SetStateAction<Letter | undefined>>;
  setFormMessage: Dispatch<SetStateAction<string>>;
}

import { Dispatch, SetStateAction } from "react";
import { Letter } from ".";

export interface FormProps {
  setRecievedLetter: Dispatch<SetStateAction<Letter | undefined>>;
}

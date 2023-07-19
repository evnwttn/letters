import { Dispatch, SetStateAction } from "react";
import { Letter } from ".";

export interface GetLetterHandlerProps {
  setRecievedLetter: Dispatch<SetStateAction<Letter | undefined>>;
}

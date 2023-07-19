import axios from "axios";
import { lambdaRoutes } from ".";
import { SubmitLetterHandlerProps } from "../types";

export const submitLetterHandler = async ({
  letter,
  setFormMessage,
  toggleSubmitting,
  setRecievedLetter,
}: SubmitLetterHandlerProps) => {
  let isMounted = true;

  console.log(letter);

  axios
    .post(lambdaRoutes.submitLetter, letter)
    .then((res: any) => isMounted && console.log(res))
    .catch(function (error: any) {
      console.log(error);
    });

  return () => {
    isMounted = false;
  };
};

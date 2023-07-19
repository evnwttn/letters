import axios from "axios";
import { lambdaRoutes } from ".";
import { SubmitLetterHandlerProps } from "../types";

export const submitLetterHandler = async ({
  letter,
  setFormMessage,
  toggleSubmitting,
  setSubmittedLetter,
}: SubmitLetterHandlerProps) => {
  let isMounted = true;
  toggleSubmitting(true);
  setFormMessage("Submitting Letter...");

  const handleResponse = () => {
    setSubmittedLetter(true);
    toggleSubmitting(false);
  };

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

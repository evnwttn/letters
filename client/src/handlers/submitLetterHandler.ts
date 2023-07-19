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
  setFormMessage("Submitting Letter... ✉");

  const handleResponse = (success: boolean) => {
    if (success) {
      setSubmittedLetter(true);
      toggleSubmitting(false);
      setFormMessage("Retrieving Letter... ✉");

      return;
    }

    setFormMessage("Your letter was lost in the mail... ✉");
    toggleSubmitting(false);
  };

  axios
    .post(lambdaRoutes.submitLetter, letter)
    .then(
      (res: any) => isMounted && handleResponse(res.data.success as boolean)
    )
    .catch(function (error: any) {
      console.log(error);
    });

  return () => {
    isMounted = false;
  };
};

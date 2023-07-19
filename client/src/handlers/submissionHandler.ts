import axios from "axios";
import { lambdaRoutes } from ".";
import { SubmissionHandlerProps } from "../types";

export const submissionHandler = async ({
  submission,
  setFormMessage,
  toggleSubmitting,
}: SubmissionHandlerProps) => {
  let isMounted = true;

  console.log({ submission, setFormMessage, toggleSubmitting });

  axios
    .post(lambdaRoutes.submissionHandler, submission)
    .then((res: any) => isMounted && console.log(res))
    .catch(function (error: any) {
      console.log(error);
    });

  return () => {
    isMounted = false;
  };
};

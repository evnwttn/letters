import axios from "axios";
import { lambdaRoutes } from ".";
import { GetLetterHandlerProps } from "../types";

export const getLetterHandler = async ({
  setRecievedLetter,
}: GetLetterHandlerProps) => {
  let isMounted = true;

  axios
    .get(lambdaRoutes.getLetter)
    .then((res: any) => isMounted && console.log(res))
    .catch(function (error: any) {
      console.log(error);
    });

  return () => {
    isMounted = false;
  };
};

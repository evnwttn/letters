import axios from "axios";
import { lambdaRoutes } from ".";
import { GetLetterHandlerProps, Letter } from "../types";

export const getLetterHandler = async ({
  setRecievedLetter,
  setFormMessage,
}: GetLetterHandlerProps) => {
  let isMounted = true;

  const handleResponse = (letter: Letter) => {
    if (letter) {
      setRecievedLetter(letter);
    } else {
      setFormMessage("Your letter was lost in the mail... ✉");
    }
  };

  axios
    .get(lambdaRoutes.getLetter)
    .then(
      (res: any) =>
        isMounted &&
        handleResponse({
          name: res.data.letter.name,
          message: res.data.letter.message,
        } as Letter)
    )
    .catch(function (error: any) {
      console.log(error);
    });

  return () => {
    isMounted = false;
  };
};

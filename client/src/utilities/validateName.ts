import { onlyLetters } from ".";

// Returns true only if name is a string, less than 35 characters and contains only letters & spaces.

export const validateName = (name: string): boolean => {
  if (typeof name !== "string" || name.length >= 35 || !onlyLetters(name)) {
    return false;
  }

  return true;
};

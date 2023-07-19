// Returns true only if message is a string, less than 280 characters and does not contain the phrase "chicken tenders"

export const validateMessage = (message: string): boolean => {
  if (
    typeof message !== "string" ||
    message.length >= 280 ||
    message.includes("chicken tenders")
  ) {
    return false;
  }

  return true;
};

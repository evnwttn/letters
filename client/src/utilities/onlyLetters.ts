// Returns true if string only contains letters & spaces

export const onlyLetters = (string: string): boolean => {
  return /^[A-Za-z\s]+$/.test(string);
};

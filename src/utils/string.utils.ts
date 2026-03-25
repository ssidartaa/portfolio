export const captalize = (str: string, eachWord = false) =>
  eachWord
    ? str
        .split(" ")
        .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
        .join(" ")
    : `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

export const cn = (...classes: unknown[]): string =>
  classes.filter(Boolean).join(" ");

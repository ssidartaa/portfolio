export const captalize = (str: string, eachWord = false) =>
  eachWord
    ? str
        .split(" ")
        .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
        .join(" ")
    : `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

export const normalize = (str: string): string =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");

export const matchShortcut = (
  { key: keyName, shiftKey, ctrlKey, metaKey, altKey }: KeyboardEvent,
  shortcuts: string[],
): boolean => {
  const parts = shortcuts.map((shortcut) => shortcut.toLowerCase());

  const key = parts[parts.length - 1];

  const requiresShift = parts.includes("⇧") || parts.includes("shift");
  const requiresCtrl = parts.includes("ctrl");
  const requiresMeta = parts.includes("⌘") || parts.includes("meta");
  const requiresAlt = parts.includes("alt");

  return (
    keyName.toLowerCase() === key &&
    shiftKey === requiresShift &&
    ctrlKey === requiresCtrl &&
    metaKey === requiresMeta &&
    altKey === requiresAlt
  );
};

export const captalize = (str: string, eachWord = false) =>
  eachWord
    ? str
        .split(" ")
        .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
        .join(" ")
    : `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

export const matchShortcut = (
  event: KeyboardEvent,
  shortcut: string,
): boolean => {
  const parts = shortcut.toLowerCase().split("+");

  const key = parts[parts.length - 1];

  const requiresShift = parts.includes("⇧") || parts.includes("shift");
  const requiresCtrl = parts.includes("ctrl");
  const requiresMeta = parts.includes("⌘") || parts.includes("meta");
  const requiresAlt = parts.includes("alt");

  return (
    event.key.toLowerCase() === key &&
    event.shiftKey === requiresShift &&
    event.ctrlKey === requiresCtrl &&
    event.metaKey === requiresMeta &&
    event.altKey === requiresAlt
  );
};

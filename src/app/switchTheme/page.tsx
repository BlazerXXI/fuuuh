export const getTheme = () => {
  if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "Dark";
  } else {
    return "Light";
  }
};

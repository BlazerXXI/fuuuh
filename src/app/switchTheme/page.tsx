export const getTheme = () => {
	if (
		typeof window !== "undefined" &&
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches
	) {
		return "Light";
	} else {
		return "Dark";
	}
};

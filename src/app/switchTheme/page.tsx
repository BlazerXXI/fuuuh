"use client";
import React, { useEffect, useState } from "react";

export default function SwitchTheme() {
	const storedTheme =
		typeof window !== "undefined" ? localStorage.getItem("theme") : null;
	const initialTheme = storedTheme !== null ? storedTheme : "light";

	const [currentTheme, setCurrentTheme] = useState(initialTheme);

	useEffect(() => {
		const darkThemeMediaQuery = window.matchMedia(
			"(prefers-color-scheme: dark)"
		);

		const handleThemeChange = (event: MediaQueryListEventInit) => {
			setCurrentTheme(event.matches ? "dark" : "light");
		};

		darkThemeMediaQuery.addListener(handleThemeChange);
		handleThemeChange(darkThemeMediaQuery);
		return () => {
			darkThemeMediaQuery.removeListener(handleThemeChange);
		};
	}, []);

	useEffect(() => {
		localStorage.setItem("theme", currentTheme);
		document.body.classList.remove("light", "dark");
		document.body.classList.add(currentTheme);
	}, [currentTheme]);
}

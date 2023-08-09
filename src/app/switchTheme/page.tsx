"use client";
import React, { useEffect, useState } from "react";

const SwitchTheme = () => {
	const storedTheme = localStorage.getItem("theme");
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

	const handleThemeSwitch = () => {
		currentTheme !== "dark"
			? setCurrentTheme("dark")
			: setCurrentTheme("light");
	};
};

export default SwitchTheme;

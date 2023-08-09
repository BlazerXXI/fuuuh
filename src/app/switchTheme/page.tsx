/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";

export default function SwitchTheme() {
	const storedTheme = localStorage.getItem("theme");
	const initialTheme = storedTheme !== null ? storedTheme : "dark";

	const [currentTheme, setCurrentTheme] = useState(initialTheme);

	useEffect(() => {
		const darkThemeMediaQuery = window.matchMedia(
			"(prefers-color-scheme: dark)"
		);

		const handleThemeChange = (event: MediaQueryListEventInit) => {
			if (!localStorage.getItem("handleThemeChange")) {
				setCurrentTheme(initialTheme);
				setCurrentTheme(event.matches ? "dark" : "light");
			} else {
				return null;
			}
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

	function handleThemeChange() {
		if (!["light", "dark"].includes(currentTheme)) return;
		setCurrentTheme((prevState) => (prevState === "dark" ? "light" : "dark"));

		localStorage.setItem("handleThemeChange", "true");
	}
	const imageTheme = currentTheme !== "dark" ? "sun" : "moon";

	return (
		<>
			<button
				onClick={handleThemeChange}
				className="animate-pulse opacity-80 switchTheme"
			>
				<img
					src={`/img/header/${imageTheme}.svg`}
					width={19}
					height={19}
					alt="image moon sun"
				/>
			</button>
		</>
	);
}
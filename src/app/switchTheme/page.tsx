import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function SwitchTheme() {
	const storedTheme =
		typeof window !== "undefined" ? localStorage.getItem("theme") : null;
	const initialTheme = storedTheme !== null ? storedTheme : "light";
	const [currentTheme, setCurrentTheme] = useState(initialTheme);
	const iconWithTheme = currentTheme === "dark" ? "sun" : "moon";

	useEffect(() => {
		if (typeof window !== "undefined") {
			const darkThemeMediaQuery = window.matchMedia(
				"(prefers-color-scheme: dark)"
			);

			const handleThemeChange = (event: MediaQueryListEventInit) => {
				if (!localStorage.getItem("handleThemeChange")) {
					setCurrentTheme(event.matches ? "dark" : "light");
				}
			};

			darkThemeMediaQuery.addListener(handleThemeChange);
			handleThemeChange(darkThemeMediaQuery);

			return () => {
				darkThemeMediaQuery.removeListener(handleThemeChange);
			};
		}
	}, []);

	useEffect(() => {
		if (typeof window !== "undefined") {
			localStorage.setItem("theme", currentTheme);
			document.body.classList.remove("light", "dark");
			document.body.classList.add(currentTheme);
		}
	}, [currentTheme]);

	function handleThemeChange() {
		if (!["light", "dark"].includes(currentTheme)) return;
		setCurrentTheme((prevState) => (prevState === "dark" ? "light" : "dark"));

		localStorage.setItem("handleThemeChange", "true");
	}

	return (
		<>
			<button
				onClick={handleThemeChange}
				className="animate-pulse opacity-80 switchTheme"
			>
				<Image
					src={`/img/header/${iconWithTheme}.svg`}
					width={19}
					height={19}
					alt={iconWithTheme}
				/>
			</button>
		</>
	);
}

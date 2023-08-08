"use client";
import "./globals.scss";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { GetTheme } from "./switchTheme/page";
import { useState, useEffect } from "react";

const roboto = Roboto({
	subsets: ["latin"],
	weight: "400",
});

export const metadata: Metadata = {
	title: "Fuuuh Bar",
	description: "Fuuuh Bar menu",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const storedTheme = localStorage.getItem("theme");
	const initialTheme = storedTheme !== null ? storedTheme : "light";

	const [currentTheme, setCurrentTheme] = useState(initialTheme);

	useEffect(() => {
		const darkThemeMediaQuery = window.matchMedia(
			"(prefers-color-scheme: dark)"
		);
		const handleThemeChange = (event: any) => {
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
	}, [currentTheme]);

	const bodyClassNames = `${roboto.className} ${currentTheme}`;
	return (
		<html className="container" lang="uk">
			<body className={bodyClassNames}>
				<Header />
				<main className="container">{children}</main>
				<Footer />
			</body>
		</html>
	);
}

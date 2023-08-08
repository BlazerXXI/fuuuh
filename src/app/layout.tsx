import "./globals.scss";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { GetTheme } from "./switchTheme/page";

export const metadata: Metadata = {
	title: "Fuuuh Bar",
	description: "Fuuuh Bar menu",
};
const storedTheme = localStorage.getItem("theme");
const initialTheme = storedTheme !== null ? storedTheme : "light";

const roboto = Roboto({
	subsets: ["latin"],
	weight: "400",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const bodyClassNames = `${roboto.className} ${initialTheme}`;
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

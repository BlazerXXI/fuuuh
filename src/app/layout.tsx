import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Fuuuh Bar",
	description: "Fuuuh Bar menu",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="uk">
			<Header />
			<body className={inter.className}>{children}</body>
			<Footer />
		</html>
	);
}

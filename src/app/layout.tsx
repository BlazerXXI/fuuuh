import "./globals.scss";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

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

	const bodyClassNames = `${roboto.className}`;
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

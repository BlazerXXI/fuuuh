import React from "react";
import "./globals.scss";
import Header from "./components/header/page";

const page = () => {
	return (
		<>
			<header className="py-6 -mx-2 px-2">
				<Header />
			</header>
			<main></main>
			<footer></footer>
		</>
	);
};

export default page;

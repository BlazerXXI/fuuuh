import Hero from "./components/Hero";
import "./globals.scss";
import Food from "./pages/Food/Food";

const page = () => {
	return (
		<main>
			<Hero />
			<Food />
		</main>
	);
};

export default page;

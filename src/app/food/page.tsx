"use client";
import { useEffect, useRef, useState } from "react";
import Breakfast from "./breakfast/page";
import Snacks from "./snacks/page";

const Food = () => {
	const breakfast = [
		{
			src: "/img/breakfast/syrnik.jpeg",
			title: "Сирники ФУУУХ",
			price: "155",
			description:
				"Ці сирники готуються у духовці . Подаються зі сметаною та варенням і є чудовим вибором для тих, хто любить солодкий сніданок.",
		},
		{
			src: "/img/breakfast/lenivy.jpeg",
			title: "Ліниві вареники із згущеним молоком",
			price: "145",
			description:
				"Ліниві вареники з згущеним молоком - це ситний і смачний варіант для сніданку або легкого обіду.",
		},
		{
			src: "/img/breakfast/omlet.jpeg",
			title: "Омлет з лососем, авокадо та моцареллою",
			price: "190",
			description:
				"Омлет з авокадо - це страва, яка додасть вам енергії та ситості на початку дня. ",
		},
		{
			src: "/img/breakfast/omlet.jpeg",
			title: "Омлет з сиром, куркою та грибами",
			price: "180",
			description:
				"Ситний та поживний сніданок, з підсмаженою курочкою та зеленню.",
		},
		{
			title: "Англійський сніданок",
			price: "195",
			description:
				"Ситний та поживний сніданок, який складається з м'ясних делікатесів, свіжих овочів, яєчниці та  тостів, що допоможе розпочати день",
		},
	];

	const [isZoomed, setIsZoomed] = useState(
		new Array(breakfast.length).fill(false)
	);
	const handleImageClick = (index: number) => {
		setIsZoomed((prev) =>
			prev.map((value, i) => (i === index ? !prev[i] : false))
		);
	};
	const zoomedImageRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (!event.target) return;
			const targetElement = event.target as HTMLElement;
			if (
				!zoomedImageRef.current?.contains(targetElement) &&
				isZoomed.some((value) => value)
			) {
				setIsZoomed(new Array(breakfast.length).fill(false));
			}
		};

		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [isZoomed]);

	return (
		<section id="food">
			<div>
				<h2 className="title-section">Їжа</h2>
			</div>
			<Breakfast />
			<Snacks />
		</section>
	);
};

export default Food;

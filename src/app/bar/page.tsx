"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Bar = () => {
	interface barTypes {
		src?: string;
		title: string;
		price?: string | undefined;
		description?: string | undefined;
		individual?: string;
	}
	const popcorn: string[] = ["Солоний", "Суперсир", "Бекон"];
	const popcornPrice: string | undefined = "100 / 150";

	const bar: barTypes[] = [
		{
			title: "NAME",
			price: "359",
		},
	];

	const lemonade: string[] = [
		"Ананасовий",

		" Яблучний",

		"Чорна смородина",

		"Класичний лимонад",

		"Лимонад манго-маракуйя",

		"Хьюго б/а",
	];
	const lemonadePrice: string | undefined = "130";

	const coffee: barTypes[] = [
		{
			title: "Американо/Еспресо",
			price: "65",
		},
		{
			title: "Рослинне молоко",
			price: "+35",
		},
		{
			title: "Капучіно/Латте",
			price: "75/ 85/ 95",
		},
		{
			title: "Флет",
			price: "120",
		},
		{
			title: "Айс латте",
			price: "120",
		},
		{
			title: "Какао",
			price: "110",
		},
	];

	const tea = ["Чорний / зелений"];
	const teaPrice = "110";

	const teaFirm: string[] = [
		"Ананасовий",

		"Чорна смородина",

		"Імбирний",

		"Лайм-м’ята",

		"М’ята-маракуйя",
	];
	const teaFirmPrice: string | undefined = "150";

	const cocktail: barTypes[] = [
		{
			src: "/img/bar/fuuuh.jpeg",
			title: "FUUUH",
			description: "На основі джину, кисло-солодкий з терпкістю амаретто",
			price: "220",
		},
		{
			src: "/img/bar/popcorn.jpeg",
			title: "POPKORN",
			description: "На основі джину, солодкий з яблучною кислинкою",
			price: "220",
		},
		{
			src: "/img/bar/satisfaction.jpeg",
			title: "SATISFACTION",
			description: "На основі апероль і просекко,кисло-солодкий",
			price: "220",
		},
		{
			src: "/img/bar/SPECIAL.jpeg",
			title: "SPECIAL",
			description: "На основі бурбону, кисло солодкий з пряністю імбиру",
			price: "220",
		},
		{
			src: "/img/bar/SICILIA.jpeg",
			title: "SICILIA",
			description: "На основі лимончело, кисло-солодкий з нотками яблука",
			price: "220",
		},
		{
			src: "/img/bar/COSMIC.jpeg",
			title: "COSMIC",
			description: "На основі джину, солодкий з нотами вишні та малини",
			price: "220",
		},
		{
			src: "/img/bar/ASTON.jpeg",
			title: "ASTON",
			description:
				"На основі лимончелло і просекко, легко-кислий, але дуже освіжаючий",
			price: "220",
		},
		{
			src: "/img/bar/TROPIC.jpeg",
			title: "TROPIC",
			description: "На основі рому, солодкий, тропічний",
			price: "220",
		},
		{
			src: "/img/bar/SMAGY.jpeg",
			title: "SMAGY",
			description: "На основі джину, зі смородиною, осаіжаючий та солодкий",
			price: "220",
		},
		{
			src: "/img/bar/Milk.jpeg",
			title: "Milk Punch",
			description: "На основі рому, дуже м’який , з легкою кислинкою",
			price: "220",
		},
		{
			src: "/img/bar/milk-punch.jpeg",
			title: "Milk Punch ( молочно цитрусовий)",
			description:
				"Пунш на основі джину з пряністю кориці та вершково-цитрусовим післясмаком",
			price: "220",
		},
		{
			src: "/img/bar/Pine.jpeg",
			title: "Pine",
			description:
				"На основі віскі та сухого вермута , з солодким післясмаком ананасу",
			price: "220",
		},
		{
			src: "/img/bar/vanilla.jpeg",
			title: "Red vanilla",
			description: "На основі віскі та вінілі , з легкою кислинкою",
			price: "220",
		},
		{
			src: "/img/bar/honey.jpeg",
			title: "Honey pear",
			description: "На основі джину з медово-грушовим смаком",
			price: "220",
		},
		{
			src: "/img/bar/currant.jpeg",
			title: "Royal currant",
			description: "На основі смородинового джину зі смаком кисленької малини",
			price: "220",
		},
		{
			src: "/img/bar/Pie.jpeg",
			title: "Pie drink",
			description: "На основі джину, смак яблучного штруделю з корицею",
			price: "220",
		},
		{
			src: "/img/bar/RUSPBERRY.jpeg",
			title: "French 75",
			individual: "RUSPBERRY",
			description: "На основі малинового джину та просеко, освіжаючий",
			price: "220",
		},
	];

	const [isZoomed, setIsZoomed] = useState(new Array(bar.length).fill(false));
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
				setIsZoomed(new Array(bar.length).fill(false));
			}
		};

		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [isZoomed, bar.length]);
	return (
		<>
			<section id="hero">
				<Image
					className="object-cover w-full h-[30vh]"
					src={"/img/hero/barBg.jpeg"}
					width={1200}
					height={335}
					alt="hero image"
				/>
			</section>
			<section id="bar">
				<div>
					<h2 className="title-section">Бар / кальян / попкорн</h2>
				</div>
				<div>
					<div>
						<div>
							<h3 className="sub-title-section">Попкорн 🍿</h3>
							<p className="italic mt-4">Середній / Великий</p>
						</div>
						<ul className="flex flex-col gap-4 mt-3">
							{popcorn.map((item, index) => (
								<li key={index}>
									<h4 className="text-[#5e87c9] text-xl md:text-2xl">{item}</h4>
								</li>
							))}
							<p className=" underline">{popcornPrice} грн</p>
						</ul>
					</div>
					<div>
						<h3 className="sub-title-section">Кальян 💨</h3>
						<Image
							className="object-cover w-full mt-4 max-w-[780px]"
							width={360}
							height={350}
							src={"/img/hookah/hookah.jpeg"}
							alt={"hookah"}
						></Image>
						<p className=" underline mt-6">360 грн</p>
					</div>
					<div>
						<h3 className="italic w-80 text-1xl font-semibold bg-gradient-to-r from-purple-500 to-yellow-500 mt-6 ">
							Iqos Heets
						</h3>
						<p className=" underline mt-6">130грн</p>
					</div>
					<div>
						<div>
							<h3 className="sub-title-section">Лимонади Фууух</h3>
						</div>
						<ul className="flex flex-col gap-4 mt-3">
							{lemonade.map((item, index) => (
								<li key={index}>
									<h4 className="text-[#5e87c9] text-xl md:text-2xl">{item}</h4>
								</li>
							))}
							<p className=" underline">{lemonadePrice} грн</p>
						</ul>
					</div>
					<div>
						<div>
							<h3 className="sub-title-section">Кава ☕️</h3>
							<p className="italic">Маленька / Середня / Велика</p>
						</div>
						<ul className="flex flex-col gap-4 mt-3">
							{coffee.map((item, index) => (
								<li key={index}>
									<h4 className="text-[#5e87c9] text-xl md:text-2xl">
										{item.title}
									</h4>
									<p className=" font-semibold">{item.price} грн</p>
								</li>
							))}
						</ul>
					</div>
					<div>
						<div>
							<h3 className="sub-title-section">Чаї класичні 🍵</h3>
						</div>
						<ul className="flex flex-col gap-4 mt-3">
							{tea.map((item, index) => (
								<li key={index}>
									<h4 className="text-[#5e87c9] text-xl md:text-2xl">{item}</h4>
								</li>
							))}
						</ul>
						<p className=" font-semibold underline mt-3">{teaPrice} грн</p>
					</div>
					<div>
						<div>
							<h3 className="sub-title-section">Чаї фірмові 🍵</h3>
						</div>
						<ul className="flex flex-col gap-4 mt-3">
							{teaFirm.map((item, index) => (
								<li key={index}>
									<h4 className="text-[#5e87c9] text-xl md:text-2xl">{item}</h4>
								</li>
							))}
						</ul>
						<p className=" font-semibold underline mt-3">{teaFirmPrice} грн</p>
					</div>
					<div>
						<div>
							<h3 className="sub-title-section">Коктейлі фірмові 🍸</h3>
						</div>
						<ul className="grid md:grid-cols-2 lg:grid-cols-3 items-center justify-around gap-4 mt-16">
							{cocktail.map((item, index) => (
								<li
									className="flex flex-col gap-2 w-[330px] h-[600px]"
									key={index}
								>
									<h4 className="text-[#5e87c9] text-xl md:text-2xl">
										{item.title}
										{item.individual ? (
											<span className="text-[#d15796]">
												{" " + item.individual}
											</span>
										) : null}
									</h4>
									<p className="flex-auto">{item.description}</p>
									<Image
										className="object-cover h-[440px]"
										src={item.src}
										alt={item.title}
										width={330}
										height={440}
									/>
									<p className=" font-semibold text-xl underline mt-6">
										{item.price} грн
									</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>
		</>
	);
};

export default Bar;

"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Bar = () => {
	interface barTypes {
		src?: string | undefined;
		title: string | undefined;
		price?: string | undefined;
		description?: string | undefined;
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
							className="object-cover w-full mt-4"
							width={360}
							height={350}
							src={"/img/hookah/hookah.jpeg"}
							alt={"hookah"}
						></Image>
						<p className=" underline mt-6">360 грн</p>
					</div>
					<div>
						<h3 className="italic text-1xl font-semibold bg-gradient-to-r from-purple-500 to-yellow-500 mt-6 ">
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
				</div>
			</section>
		</>
	);
};

export default Bar;

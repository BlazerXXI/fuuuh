"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const MainDishes = () => {
	interface typesMenu {
		src?: string;
		title: string;
		description?: string;
		price: string;
		pricePer?: string;
	}

	const mainDishes: typesMenu[] = [
		{
			src: "/img/mainDishes/kovbasky.jpeg",
			title: "Ковбаски з соусом барбекю",
			description:
				"Ідеальні ковбаски підсмажені до скоринки на грилі та соус барбекю",
			price: "220",
		},
		{
			src: "/img/mainDishes/fuuuh.jpeg",
			title: "Наш Бургер «Фууух» із картоплею фрі",
			description:
				"Соковитий бургер «Фууух» з м’якою булочкою та дуже соковитим м’ясом, із салатом айсберг, справжнім сиром Чедр, беконом та фірмовим соусом",
			price: "270",
		},
		{
			src: "/img/mainDishes/4cheese.jpeg",
			title: "Бургер 4CHEESE",
			description: "",
			price: "315",
		},
		{
			src: "/img/mainDishes/kare.jpeg",
			title: "Каре теля з соусом із чорної смородини",
			description: "",
			price: "350",
		},
		{
			src: "/img/mainDishes/shash.jpeg",
			title: "Курячі шашлички з часниковим соусом",
			description: "",
			price: "200",
		},
		{
			src: "/img/mainDishes/chiken.jpeg",
			title: "Курча з аджикою",
			description: "",
			price: "295",
		},
		{
			src: "/img/mainDishes/dorado.jpeg",
			title: "Дорадо на грилі",
			description: "Дорадо з сальсою «верде»",
			price: "~550гр 320",
		},
		{
			src: "",
			title: "Стейк із телятини на кісточці",
			description: "Дорадо з сальсою «верде»",
			price: "150",
			pricePer: "за 100гр ",
		},
		{
			src: "/img/mainDishes/koreika.jpeg",
			title: "Корейка із свинини",
			description: "Корейка із соусом барбекю. Вихід стейку від 250гр.",
			price: "85",
			pricePer: "за 100гр ",
		},
		{
			src: "/img/mainDishes/fetuch.jpeg",
			title: "Фетучині з креветками",
			price: "250",
		},
		{
			title: "Фетучині з лососем та цукіні",
			price: "250",
		},
		{
			src: "/img/mainDishes/funch.jpeg",
			title: "Фунчоза з креветками та болгарським перцем",
			price: "250",
		},
	];

	const sideDishes: typesMenu[] = [
		{
			src: "/img/sideDishes/fri.jpeg",
			title: "Картопля фрі",
			description:
				"Ідеально обсмажена картопля фрі, з нашим особливим  соусом «Барбекю».",
			price: "90",
		},
		{
			src: "/img/sideDishes/seliyanska.jpeg",
			title: "Картопля по-селянськи",
			description: "Картопля по-селянські із фірмовими прянощами.",
			price: "90",
		},
	];

	const [isZoomed, setIsZoomed] = useState(
		new Array(mainDishes.length).fill(false)
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
				setIsZoomed(new Array(mainDishes.length).fill(false));
			}
		};

		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [isZoomed, mainDishes.length]);
	return (
		<div>
			<div className="inline-flex flex-col gap-3 md:gap-6">
				<h3 className="sub-title-section">Основні страви</h3>
				<p className="bg-[#243d30] inline-block font-medium mt-3 underline">
					Гарніри до всіх страв йдуть окремо
				</p>
			</div>
			<ul className="grid md:grid-cols-2 lg:grid-cols-4 md:mt-12 mt-7 gap-16">
				{mainDishes.map((item, index) => (
					<li
						className="text-center flex flex-col items-center justify-content-center "
						key={index}
					>
						<div className="max-w-[240px] card-border flex flex-col grow gap-5">
							{item.src ? (
								<div
									ref={zoomedImageRef}
									className="w-[240px] h-[320px] z-20 flex flex-col align-items-center justify-center"
								>
									<Image
										onClick={() => handleImageClick(index)}
										className={`rounded-lg object-cover ${
											isZoomed[index] ? "zoomed-image" : ""
										}`}
										src={item.src}
										alt={`блюдо` + " " + item.title}
										width={240}
										height={300}
									/>
								</div>
							) : (
								<div className="w-[220px] h-[320px] flex flex-col justify-center m-auto">
									<Image
										className="rounded-lg m-auto no-photo"
										src="/img/no_photo.png"
										width={220}
										height={220}
										alt="no photo"
									/>
								</div>
							)}
							<div className="px-3 pb-4 flex flex-col z-10 grow gap-5">
								<h4 className="text-[#5e87c9] text-xl md:text-2xl">
									{item.title}
								</h4>
								<p className="opacity-80">{item.description}</p>
								<p className="flex flex-col grow justify-end text-2xl">
									{item.price} грн {item.pricePer}
								</p>
							</div>
						</div>
					</li>
				))}
			</ul>
			<div className="flex flex-col gap-5 md:gap-10">
				<h3 className="text-[#D15796] text-xl font-semibold md:mt-32 mt-14 inline-flex">
					Гарніри:
				</h3>
				<ul className="grid md:grid-cols-2 lg:grid-cols-4 md:mt-12 mt-7 gap-16">
					{sideDishes?.map((item, index) => (
						<li
							className="text-center flex flex-col items-center justify-content-center "
							key={index}
						>
							<div className="max-w-[240px] card-border flex flex-col grow gap-5">
								{item.src ? (
									<div
										ref={zoomedImageRef}
										className="w-[240px] h-[320px] z-20 flex flex-col align-items-center justify-center"
									>
										<Image
											onClick={() => handleImageClick(index)}
											className={`rounded-lg object-cover ${
												isZoomed[index] ? "zoomed-image" : ""
											}`}
											src={item.src}
											alt={`блюдо` + " " + item.title}
											width={240}
											height={300}
										/>
									</div>
								) : (
									<div className="w-[220px] h-[320px] flex flex-col justify-center m-auto">
										<Image
											className="rounded-lg m-auto no-photo"
											src="/img/no_photo.png"
											width={220}
											height={220}
											alt="no photo"
										/>
									</div>
								)}
								<div className="px-3 pb-4 flex flex-col z-10 grow gap-5">
									<h4 className="text-[#5e87c9] text-xl md:text-2xl">
										{item.title}
									</h4>
									<p className="opacity-80">{item.description}</p>
									<p className="flex flex-col grow justify-end text-2xl">
										{item.price} грн {item.pricePer}
									</p>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default MainDishes;

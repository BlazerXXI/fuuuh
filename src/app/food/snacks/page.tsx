"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Snacks = () => {
	const snacks = [
		{
			src: "/img/snacks/bri.jpeg",
			title: "Сир Брі у хрусткій скоринці з полуничним соусом",

			description:
				"Витончений та смачний сир Брі, обгорнутий хрусткою, що розкривається на тарілці, доповнений ніжним джемом.",
			price: "210",
		},
		{
			src: "/img/snacks/dovina.jpeg",
			title: "Дощечка до вина",
			description:
				"Ліниві вареники з згущеним молоком - це ситний і смачний варіант для сніданку або легкого обіду.",
			price: "230",
		},
		{
			src: "/img/snacks/bri.jpeg",
			title: "Омлет з лососем, авокадо та моцареллою",
			description:
				"Омлет з авокадо - це страва, яка додасть вам енергії та ситості на початку дня. ",
			price: "190",
		},
		{
			src: "/img/snacks/bri.jpeg",
			title: "Омлет з сиром, куркою та грибами",
			description:
				"Ситний та поживний сніданок, з підсмаженою курочкою та зеленню.",
			price: "180",
		},
		{
			title: "Англійський сніданок",
			description:
				"Ситний та поживний сніданок, який складається з м'ясних делікатесів, свіжих овочів, яєчниці та  тостів, що допоможе розпочати день",
			price: "195",
		},
	];

	const [isZoomed, setIsZoomed] = useState(
		new Array(snacks.length).fill(false)
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
				setIsZoomed(new Array(snacks.length).fill(false));
			}
		};

		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [isZoomed, snacks.length]);
	return (
		<div>
			<div>
				<h3 className="sub-title-section">Закуски</h3>
			</div>
			<ul className="grid md:grid-cols-2 lg:grid-cols-4 md:mt-12 mt-7 gap-16">
				{snacks.map((item, index) => (
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
								<div className="w-[240px] h-[300px] flex flex-col justify-center">
									<Image
										className="rounded-lg m-auto"
										src="/img/no_photo.png"
										width={240}
										height={300}
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
									{item.price} грн
								</p>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Snacks;

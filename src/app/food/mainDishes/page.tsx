"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { mainDishes } from "../../menu.json";
import { sideDishes } from "../../menu.json";
import { MenuTypes } from "@/app/types";

const MainDishes = () => {
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
	}, [isZoomed]);
	return (
		<div id="mainDishes">
			<div className="inline-flex flex-col gap-3 md:gap-6">
				<h3 className="sub-title-section">Основні страви</h3>
				<p className="bg-[#243d30] inline-block font-medium mt-3 underline">
					Гарніри до всіх страв йдуть окремо
				</p>
			</div>
			<ul className="grid md:grid-cols-2 lg:grid-cols-4 md:mt-12 mt-7 gap-16">
				{mainDishes.map((item: MenuTypes, index: number) => (
					<li
						className="text-center flex flex-col items-center justify-content-center "
						key={index}
					>
						<div className="w-[240px] card-border flex flex-col grow gap-5">
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
					{sideDishes.map((item: MenuTypes, index: number) => (
						<li
							className="text-center flex flex-col items-center justify-content-center "
							key={index}
						>
							<div className="w-[240px] card-border flex flex-col grow gap-5">
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

"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { salats } from "../../menu.json";
import { MenuTypes } from "@/app/types";

const Salats = () => {
	const [isZoomed, setIsZoomed] = useState(
		new Array(salats.length).fill(false)
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
				setIsZoomed(new Array(salats.length).fill(false));
			}
		};

		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [isZoomed]);
	return (
		<div id="salats">
			<div>
				<h3 className="sub-title-section">Салати</h3>
			</div>
			<ul className="grid md:grid-cols-2 lg:grid-cols-4 md:mt-12 mt-7 gap-16">
				{salats.map((item: MenuTypes, index: number) => (
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
									{item.price} грн
								</p>
							</div>
						</div>
					</li>
				))}
			</ul>
			<div className="bg-[#143A4E] px-5 py-4 w-[240px] mt-12 max-md:mx-auto">
				<h3 className="font-semibold">Додаємо 50гр :</h3>
				<ul className="font-normal mt-3">
					<li className="flex justify-between ">
						{" "}
						<span>Курочка</span> 45грн
					</li>
					<li className="flex justify-between mt-1">
						<span>Лосось</span> 95грн
					</li>
					<li className="flex justify-between mt-1">
						<span>Ростбіф</span> 65грн
					</li>
					<li className="flex justify-between mt-1">
						<span>Креветки</span> 5шт 105грн
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Salats;

"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { getMenuData } from "@/app/api";
import { MenuTypes } from "@/app/types";

const Breakfast = () => {
	const [menuData, setMenuData] = useState<MenuTypes[]>([]);
	const [isZoomed, setIsZoomed] = useState<boolean[]>([]);

	const handleImageClick = (index: number) => {
		setIsZoomed((prev) =>
			prev.map((value, i) => (i === index ? !prev[i] : false))
		);
	};

	const zoomedImageRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getMenuData();
				if (data && data.food) {
					setMenuData(data.food);
					setIsZoomed(new Array(data.food.length).fill(false));
				}
			} catch (error) {
				console.error("Ошибка при получении данных:", error);
			}
		};

		fetchData();
	}, []);

	if (!menuData) {
		return (
			<>
				<p className="text-center text-2xl">Loading...</p>
			</>
		);
	}

	return (
		<div id="breakfast">
			{menuData.map((item: MenuTypes, index: number) => (
				<div key={index}>
					<div>
						<h3 className="sub-title-section">{item.header}</h3>
					</div>
					<ul className="grid md:grid-cols-2 lg:grid-cols-3 md:mt-12 mt-7 gap-16">
						{item.map((items: MenuTypes, indexNumber: number) => {
							<li
								className="text-center flex flex-col items-center justify-content-center "
								key={index}
							>
								<div className="w-[300px] card-border flex flex-col grow gap-5">
									{item.src ? (
										<div
											ref={zoomedImageRef}
											className="w-[300px] h-[360px] z-20 flex flex-col align-items-center justify-center"
										>
											<Image
												onClick={() => handleImageClick(index)}
												className={`rounded-lg ${
													isZoomed[index] ? "zoomed-image" : ""
												} w-auto`}
												src={item.src}
												alt={`блюдо ${item.title}`}
												width={300}
												height={360}
											/>
										</div>
									) : (
										<div className="w-[220px] h-[360px] flex flex-col align-items-center justify-center m-auto">
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
										<h4 className="text-title text-xl md:text-2xl">
											{item.title}
										</h4>
										<p className="opacity-80">{item.description}</p>
										<p className="flex flex-col grow justify-end text-2xl">
											{item.price} грн
										</p>
									</div>
								</div>
							</li>;
						})}
					</ul>
				</div>
			))}
			<div className="bg-[#143A4E] px-5 py-4 w-[300px] mt-12 max-md:mx-auto addToDish">
				<h3 className="font-semibold">Додаємо 50гр :</h3>
				<ul className="font-normal mt-3">
					<li className="flex justify-between">
						<span>Курочка</span> 45грн
					</li>
					<li className="flex justify-between mt-1">
						<span>Лосось</span> 95грн
					</li>
					<li className="flex justify-between mt-1">
						<span>Моцарелла</span> 55грн
					</li>
					<li className="flex justify-between mt-1">
						<span>Зелень та авокадо</span> 60грн
					</li>
					<li className="flex justify-between mt-1">
						<span>Бекон</span> 60грн
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Breakfast;

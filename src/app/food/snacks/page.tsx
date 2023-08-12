"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MenuTypes } from "@/app/types";
import { getMenuData } from "@/app/api";

const Snacks = () => {
	const [isZoomed, setIsZoomed] = useState<boolean[]>([]);
	const [menuData, setMenuData] = useState<MenuTypes[]>([]);

	const handleImageClick = (index: number) => {
		setIsZoomed((prev) =>
			prev.map((value, i) => (i === index ? !prev[i] : false))
		);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getMenuData();
				if (data && data.snacks) {
					setMenuData(data.snacks);
					setIsZoomed(new Array(data.snacks.length).fill(false));
				}
			} catch (error) {
				console.error("Ошибка при получении данных:", error);
			}
		};
		fetchData();
	}, []);

	const zoomedImageRef = useRef<HTMLDivElement>(null);

	if (!menuData || menuData.length === 0) {
		return null;
	}

	return (
		<div id="snacks">
			<div>
				<h3 className="sub-title-section">Закуски</h3>
			</div>
			<ul className="grid md:grid-cols-2 lg:grid-cols-3 md:mt-12 mt-7 gap-16">
				{menuData.map((item: MenuTypes, index: number) => (
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
										className={`rounded-lg object-cover ${
											isZoomed[index] ? "zoomed-image" : ""
										}`}
										src={item.src}
										alt={`блюдо` + " " + item.title}
										width={300}
										height={360}
									/>
								</div>
							) : (
								<div className="w-[220px] h-[360px] flex flex-col justify-center m-auto">
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
								<h4 className="text-title text-xl md:text-2xl">{item.title}</h4>
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

"use client";
import Image from "next/image";
import { BarTypes } from "@/app/types";
import barMenuData from "@/app/menu.json";
import {
	ReactElement,
	JSXElementConstructor,
	ReactNode,
	ReactPortal,
	PromiseLikeOfReactNode,
	Key,
} from "react";

const Bar = () => {
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
							{barMenuData.popcorn.map((item: string, index: number) => (
								<li key={index}>
									<h4 className="text-[#5e87c9] text-xl md:text-2xl">{item}</h4>
								</li>
							))}
							<p className=" underline">{barMenuData.popcornPrice} грн</p>
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
							{barMenuData.lemonade.map((item: string, index: number) => (
								<li key={index}>
									<h4 className="text-[#5e87c9] text-xl md:text-2xl">{item}</h4>
								</li>
							))}
							<p className=" underline">{barMenuData.lemonadePrice} грн</p>
						</ul>
					</div>
					<div>
						<div>
							<h3 className="sub-title-section">Кава ☕️</h3>
							<p className="italic">Маленька / Середня / Велика</p>
						</div>
						<ul className="flex flex-col gap-4 mt-3">
							{barMenuData.coffee.map((item: BarTypes, index: number) => (
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
							{barMenuData.tea.map((item: string, index: number) => (
								<li key={index}>
									<h4 className="text-[#5e87c9] text-xl md:text-2xl">{item}</h4>
								</li>
							))}
						</ul>
						<p className=" font-semibold underline mt-3">
							{barMenuData.teaPrice} грн
						</p>
					</div>
					<div>
						<div>
							<h3 className="sub-title-section">Чаї фірмові 🍵</h3>
						</div>
						<ul className="flex flex-col gap-4 mt-3">
							{barMenuData.teaFirm.map((item: string, index: number) => (
								<li key={index}>
									<h4 className="text-[#5e87c9] text-xl md:text-2xl">{item}</h4>
								</li>
							))}
						</ul>
						<p className=" font-semibold underline mt-3">
							{barMenuData.teaFirmPrice} грн
						</p>
					</div>
					<div>
						<div>
							<h3 className="sub-title-section">Коктейлі фірмові 🍸</h3>
						</div>
						<ul className="grid md:grid-cols-2 lg:grid-cols-3 items-center justify-around gap-4 mt-16">
							{barMenuData.cocktail.map((item: BarTypes, index: number) => (
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
									{item.description ? (
										<p className="flex-auto">{item.description}</p>
									) : null}
									{item.src ? (
										<Image
											className="object-cover h-[440px]"
											src={item.src}
											alt={item.title}
											width={330}
											height={440}
										/>
									) : (
										<Image
											className="rounded-lg m-auto no-photo max-w-[330] max-h-[440]"
											src="/img/no_photo.png"
											width={330}
											height={440}
											alt="no photo"
										/>
									)}
									<p className=" font-semibold text-xl underline mt-6">
										{item.price} грн
									</p>
								</li>
							))}
						</ul>
					</div>
					<div>
						<div>
							<h3 className="sub-title-section">Коктейлі класичні</h3>
						</div>
						<ul className="grid md:grid-cols-2 lg:grid-cols-3 items-center justify-around gap-4 mt-16">
							{barMenuData.coctailsClassic.map(
								(item: BarTypes, index: number) => (
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
										{item.description ? (
											<p className="flex-auto">{item.description}</p>
										) : null}

										{item.src ? (
											<Image
												className="object-cover h-[440px]"
												src={item.src}
												alt={item.title}
												width={330}
												height={440}
											/>
										) : (
											<Image
												className="rounded-lg m-auto no-photo max-w-[330] max-h-[440]"
												src="/img/no_photo.png"
												width={330}
												height={440}
												alt="no photo"
											/>
										)}
										<p className=" font-semibold text-xl underline mt-6">
											{item.price} грн
										</p>
									</li>
								)
							)}
						</ul>
					</div>
					{barMenuData.bottledDrinks.map((category, index) => {
						const titleHeader = Object.values(category)[0]?.[0]?.titleHeader;

						return (
							<div key={index}>
								<div>
									<h3 className="sub-title-section">{titleHeader}</h3>
								</div>
								<ul className="flex flex-col gap-3 mt-6">
									{Object.values(category)[0]?.map(
										(
											item: { title: string; price: string },
											itemIndex: Key | null | undefined
										) => {
											return item.title ? (
												<li
													key={itemIndex}
													className="flex justify-between items-center shadow-md shadow-[#ffffff80] px-6 py-4 h-full flex-initial"
												>
													<h4>{item.title}</h4>
													<p className="text-sm opacity-80 min-w-[130px]">
														{item.price}
													</p>
												</li>
											) : null;
										}
									)}
								</ul>
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default Bar;

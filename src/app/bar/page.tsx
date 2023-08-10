"use client";
import Image from "next/image";
import { BarTypes } from "@/app/types";
import barMenuData from "@/app/menu.json";
import { Key } from "react";
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
							{barMenuData.popcorn.map((item: string, index: number) => {
								return (
									<li
										key={index}
										className="flex items-baseline justify-between"
									>
										<h4 className="text-title text-xl md:text-2xl">{item}</h4>
										<p className="  font-semibold text-xl underline mt-6">
											{barMenuData.popcornPrice} грн
										</p>
									</li>
								);
							})}
						</ul>
					</div>
					<div>
						<h3 className="sub-title-section">Кальян 💨</h3>
						<Image
							className="rounded-lg object-cover w-full mt-4 max-w-[780px]"
							width={360}
							height={350}
							src={"/img/hookah/hookah.jpeg"}
							alt={"hookah"}
						></Image>
						<ul>
							{barMenuData.hookah.map((item: BarTypes, index: number) => (
								<li key={index} className="flex justify-between">
									<p className="text-title font-semibold text-xl mt-6">
										{item.title}
									</p>
									<span className="font-semibold text-xl underline mt-6">
										{item.price} грн
									</span>
								</li>
							))}
						</ul>
					</div>
					<div className="flex justify-between">
						<h3 className="italic items-center inline-flex px-10 text-1xl font-semibold bg-gradient-to-r from-purple-500 to-yellow-500 mt-6 white-text">
							Iqos Heets
						</h3>
						<p className="font-semibold text-xl underline mt-6">130грн</p>
					</div>
					<div>
						<div>
							<h3 className="sub-title-section">Лимонади Фууух</h3>
						</div>
						<ul className="flex flex-col gap-4 mt-3">
							{barMenuData.lemonade.map((item: string, index: number) => (
								<li key={index} className="flex justify-between items-baseline">
									<h4 className="text-title text-xl md:text-2xl">{item}</h4>
									<p className="  font-semibold text-xl underline mt-6">
										{barMenuData.lemonadePrice} грн
									</p>
								</li>
							))}
						</ul>
					</div>
					<div>
						<div>
							<h3 className="sub-title-section">Кава ☕️</h3>
							<p className="italic mt-4">Маленька / Середня / Велика</p>
						</div>
						<ul className="flex flex-col gap-4 mt-3">
							{barMenuData.coffee.map((item: BarTypes, index: number) => (
								<li className="flex justify-between items-baseline" key={index}>
									<h4 className="text-title text-xl md:text-2xl">
										{item.title}
									</h4>
									<p className="  font-semibold text-xl underline mt-6">
										{item.price} грн
									</p>
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
								<li className="flex justify-between items-baseline" key={index}>
									<h4 className="text-title text-xl md:text-2xl">{item}</h4>
									<p className="  font-semibold text-xl underline  mt-3">
										{barMenuData.teaPrice} грн
									</p>
								</li>
							))}
						</ul>
					</div>
					<div>
						<div>
							<h3 className="sub-title-section">Чаї фірмові 🍵</h3>
						</div>
						<ul className="flex flex-col gap-4 mt-3">
							{barMenuData.teaFirm.map((item: string, index: number) => (
								<li className="flex justify-between items-baseline" key={index}>
									<h4 className="text-title text-xl md:text-2xl">{item}</h4>
									<p className="  font-semibold text-xl underline mt-3">
										{barMenuData.teaFirmPrice} грн
									</p>
								</li>
							))}
						</ul>
					</div>
					<div>
						<div>
							<h3 className=" text-[#D15796] font-semibold text-2xl mt-6">
								Аперетив 😉
							</h3>
						</div>
						<ul className="flex flex-col gap-4 mt-3 ">
							{barMenuData.aperetyv.map((item: BarTypes, index: number) => (
								<li key={index}>
									<h4 className="text-title text-xl md:text-2xl">
										{item.title}
									</h4>
									<Image
										className=" rounded-lg max-md:m-auto mt-4 pt-4"
										src={item.src || "default-image-url"}
										alt={item.title}
										width={300}
										height={360}
									/>
									<p className="font-semibold text-xl underline mt-3">
										{item.price} грн
									</p>
								</li>
							))}
						</ul>
					</div>

					<div>
						<div>
							<h3 className="sub-title-section">Коктейлі фірмові 🍸</h3>
						</div>
						<ul className="grid md:grid-cols-2 lg:grid-cols-3 items-center justify-around gap-10 mt-16">
							{barMenuData.cocktail.map((item: BarTypes, index: number) => (
								<li
									className="flex flex-col gap-2 w-[300px] min-h-[540px] bar-animated justify-between items-center text-center m-auto"
									key={index}
								>
									<h4 className="text-title text-xl md:text-2xl">
										{item.title}
										{item.individual ? (
											<span className="text-ruspberry">
												{" " + item.individual}
											</span>
										) : null}
									</h4>
									{item.description ? <p>{item.description}</p> : null}
									{item.src ? (
										<Image
											className="rounded-lg object-cover h-[360px]"
											src={item.src}
											alt={item.title}
											width={300}
											height={360}
										/>
									) : (
										<Image
											className=" rounded-lg m-auto no-photo max-w-[300] max-h-[360]"
											src="/img/no_photo.png"
											width={300}
											height={360}
											alt="no photo"
										/>
									)}
									<p className="  font-semibold text-xl underline  mt-6">
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
						<ul className="grid md:grid-cols-2 lg:grid-cols-3 items-center justify-around text-center  gap-10 mt-16">
							{barMenuData.coctailsClassic.map(
								(item: BarTypes, index: number) => (
									<li
										className="flex flex-col gap-2 w-[300px] h-[540px] m-auto  bar-animated justify-between items-center text-center"
										key={index}
									>
										<h4 className="text-title text-xl md:text-2xl">
											{item.title}
											{item.individual ? (
												<span className="text-ruspberry">
													{" " + item.individual}
												</span>
											) : null}
										</h4>
										{item.description ? <p>{item.description}</p> : null}

										{item.src ? (
											<Image
												className="rounded-lg object-cover h-[360px]"
												src={item.src}
												alt={item.title}
												width={300}
												height={360}
											/>
										) : (
											<Image
												className=" rounded-lg m-auto no-photo max-w-[300] max-h-[360]"
												src="/img/no_photo.png"
												width={300}
												height={360}
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
													className="flex justify-between items-center shadow-md bar-animated shadow-[#ffffff80] px-6 py-4 h-full flex-initial "
												>
													<h4 className="flex justify-start">{item.title}</h4>
													<p className="text-sm opacity-80 min-w-[130px] flex justify-end">
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

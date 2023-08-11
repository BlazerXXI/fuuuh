"use client";
import Link from "next/link";
import "./globals.scss";
import Image from "next/image";

const page = () => {
	const currentTime = new Date().getHours();
	const isDaytime = currentTime >= 6 && currentTime < 18;
	return (
		<section className="mainPage min-h-[100vh]  flex flex-col justify-start items-center text-center gap-6">
			<div className="mb-4 uppercase flex flex-col gap-2">
				<h3 className="text-lg opacity-75 font-bold mt mt-4 flex flex-col">
					{isDaytime ? "Добрий день" : "Добрий вечір"}
					<br /> Вас вітає
				</h3>
				<h2 className="pt-2 mt-2">
					<span className="text-xl d-flex flex-col font-semibold title-main-menu">
						Фууух Бар
					</span>
				</h2>
			</div>
			<div className="mt-4 rounded-lg h-[20vh] min-w-[320px] mainCards ">
				<Link className="relative" href={"/food"}>
					<Image
						className=" object-cover rounded-md m-auto w-[100vw] filter brightness-75 animateBait transition-all duration-300"
						src={"/img/salats/more.jpeg"}
						alt={"food"}
						width={320}
						height={140}
					></Image>
					<h2
						className="absolute top-1/2 left-1/2
						-translate-x-1/2 -translate-y-1/2
						text-white font-bold  uppercase "
					>
						Їжа
					</h2>
				</Link>
			</div>
			<div className="mt-4 rounded-lg h-[20vh] min-w-[320px] mainCards ">
				<Link className="relative" href={"/bar"}>
					<Image
						className=" object-cover rounded-md m-auto w-[100vw] filter brightness-75 animateBait transition-all duration-300"
						src={"/img/fuuuhbg.jpeg"}
						alt={"fuuuh bar"}
						width={320}
						height={140}
					></Image>
					<h2
						className="absolute top-1/2 left-1/2
						-translate-x-1/2 -translate-y-1/2
						text-white font-bold uppercase "
					>
						Бар / кальян / попкорн
					</h2>
				</Link>
			</div>
			<div className="mt-4 rounded-lg h-[20vh] min-w-[320px] mainCards ">
				<Link className="relative" href={"/pets"}>
					<Image
						className=" object-cover rounded-md m-auto w-[100vw] filter brightness-75 animateBait transition-all duration-300"
						src={"/img/dog.jpg"}
						alt={"dog pets"}
						width={320}
						height={140}
					></Image>
					<h2
						className="absolute top-1/2 left-1/2
						-translate-x-1/2 -translate-y-1/2
						text-white font-bold uppercase "
					>
						Меню для маленьких друзів
					</h2>
				</Link>
			</div>
		</section>
	);
};

export default page;

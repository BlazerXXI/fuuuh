"use client";
import Link from "next/link";
import "./globals.scss";
import Image from "next/image";

const page = () => {
	return (
		<section className="mainPage min-h-[100vh] pt-[-56px] flex flex-col justify-start items-center text-center gap-10">
			<div className="mb-4">
				<h3 className="text-white text-xl font-bold mt mt-4">
					Вас вітає Фууух Бар
				</h3>
			</div>
			<div className="mt-4 rounded-lg h-[20vh] min-w-[320px] mainCards ">
				<Link className="relative" href={"/food"}>
					<Image
						className=" object-cover rounded-md m-auto w-[100vw] filter brightness-75 transition-all duration-300"
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
						className=" object-cover rounded-md m-auto w-[100vw] filter brightness-75 transition-all duration-300"
						src={"/img/fuuuhbg.jpeg"}
						alt={"food"}
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
						className=" object-cover rounded-md m-auto w-[100vw] filter brightness-75 transition-all duration-300"
						src={"/img/dog.jpg"}
						alt={"food"}
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

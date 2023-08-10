import Link from "next/link";
import "./globals.scss";
import Image from "next/image";

const page = () => {
	const currentTime = new Date().getHours();
	const isDaytime = currentTime >= 6 && currentTime < 18;
	return (
		<section className="mainPage min-h-[100vh] mt-[-56px] flex flex-col justify-center items-center text-center">
			<div className="mb-4">
				<h3 className="text-white text-xl font-bold mt mt-4">
					{isDaytime ? "Добрий день" : "Добрий вечір"}
				</h3>
				<p className="text-sm opacity-75 mt-2">Вас вітає Фууух Бар</p>
			</div>
			<div className="mt-4 rounded-lg hover:opacity-60 h-[20vh] min-w-[320px]  active:opacity-80 active:scale-90 shadow-xl animationMainMenu">
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
						text-white text-xl font-bold w-full  uppercase "
					>
						Їжа
					</h2>
				</Link>
			</div>
			<div className="mt-4 rounded-lg hover:opacity-60 h-[20vh] min-w-[320px]  active:opacity-80 active:scale-90 shadow-xl animationMainMenu">
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
						text-white text-xl font-bold w-full uppercase "
					>
						Бар / кальян / попкорн
					</h2>
				</Link>
			</div>
			<div className="mt-4 rounded-lg hover:opacity-60 h-[20vh] min-w-[320px]  active:opacity-80 active:scale-90 shadow-xl animationMainMenu">
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
						text-white text-xl font-bold w-full uppercase "
					>
						Меню для маленьких друзів
					</h2>
				</Link>
			</div>
		</section>
	);
};

export default page;

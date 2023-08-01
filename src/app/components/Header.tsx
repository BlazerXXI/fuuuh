"use client";
import Image from "next/image";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";

const page = () => {
	return (
		<header className="md:py-6 py-1 text-white/80 container">
			<div className="container flex flex-row md:gap-0 gap-5 justify-between items-center">
				<div>
					<Link className="hover:transform hover:scale-0" href="/">
						<Image
							className="sm:w-[247px] w-full"
							src="/img/header/logobg.png"
							alt="logo"
							width={247}
							height={64}
						/>
					</Link>
				</div>
				<BurgerMenu />
				<nav className="hidden md:flex gap-7 text-lg items-stretch">
					<Link href="/food" className="underline">
						Їжа
					</Link>
					<Link href="/bar" className="flex flex-col underline">
						<span> Бар</span>
						<span className="text-xs opacity-60">кальян / попкорн</span>
					</Link>
					<Link href="/pets" className="underline">
						Меню для маленьких друзів
					</Link>
				</nav>
				<div className="hidden md:flex gap-7">
					<Link href="#">
						<Image
							src="/img/header/social/instagram.svg"
							width={24}
							height={24}
							alt="instagram"
						/>
					</Link>
					<Link href="#">
						<Image
							src="/img/header/social/location.svg"
							width={24}
							height={24}
							alt="location dot"
						/>
					</Link>
					<Link href="#">
						<Image
							src="/img/header/social/phone.svg"
							width={24}
							height={24}
							alt="phone"
						/>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default page;

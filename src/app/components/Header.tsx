"use client";
import Image from "next/image";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";
import SwitchTheme from "../switchTheme/page";
import { useEffect, useState } from "react";

const Header = () => {
	const [isLargeScreen, setIsLargeScreen] = useState(true);

	useEffect(() => {
		const handleResize = () => {
			setIsLargeScreen(window.innerWidth > 768);
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<header className="md:py-6 py-2 text-white/80 container z-30 border-b border-white/20">
			<div className="container flex flex-row md:gap-0 gap-5 justify-between items-center">
				<div>
					<Link className="hover:transform hover:scale-0" href="/">
						<Image
							className="sm:w-[247px] w-full logo"
							src="/img/header/logobg.png"
							alt="logo"
							width={247}
							height={64}
						/>
					</Link>
				</div>
				<div className="flex gap-4">
					{!isLargeScreen ? <SwitchTheme /> : null}
					<BurgerMenu />
				</div>
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
				{isLargeScreen ? <SwitchTheme /> : null}
				<div className="hidden md:flex gap-7 soc-menu">
					<Link target="_blank" href="https://www.instagram.com/fuuuh_bar/">
						<Image
							src="/img/header/social/instagram.svg"
							width={24}
							height={24}
							alt="instagram"
						/>
					</Link>
					<Link
						target="_blank"
						href="https://www.google.com.ua/maps/place/50.033797,+36.254528/@50.0339433,36.2545724,17z/data=!4m4!3m3!8m2!3d50.0337974!4d36.2545279?hl=ru-ua&source=lnms"
					>
						<Image
							src="/img/header/social/location.svg"
							width={24}
							height={24}
							alt="location dot"
						/>
					</Link>
					<Link target="_blank" href="tel:0959416670">
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

export default Header;

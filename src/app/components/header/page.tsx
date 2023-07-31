import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
	return (
		<div className="container flex justify-between items-center">
			<div>
				<Link href="/">
					<Image
						src="/img/header/logobg.png"
						alt="logo"
						width={247}
						height={64}
					/>
				</Link>
			</div>
			<nav className="flex gap-7 text-lg items-stretch">
				<Link href="/food" className="underline">
					{" "}
					Їжа
				</Link>
				<Link href="/bar" className="flex flex-col underline">
					<span> Бар</span>
					<span className="text-xs opacity-60">кальян / попкорн</span>
				</Link>
				<Link href="/pets" className="underline">
					{" "}
					Меню для маленьких друзів
				</Link>
			</nav>
			<div className="flex gap-7">
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
	);
};

export default page;

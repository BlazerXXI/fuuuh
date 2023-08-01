import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef } from "react";

interface BurgerMenuProps {}

const BurgerMenu: React.FC<BurgerMenuProps> = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const menuRef = useRef<HTMLDivElement>(null);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div ref={menuRef}>
			<button
				onClick={toggleMenu}
				className="block p-2 transition-colors duration-200 rounded focus:outline-none bg-[#191919f0]"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6 text-gray-600"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					{isOpen ? (
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					) : (
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16m-7 6h7"
						/>
					)}
				</svg>
			</button>

			{isOpen && (
				<div className="absolute flex flex-col gap-7 top-12 right-0 z-10 bg-[#191919f0] p-4 shadow-lg">
					<nav className="flex flex-col gap-7 text-lg items-stretch">
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
					<div className="flex gap-4 justify-center">
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
			)}
		</div>
	);
};

export default BurgerMenu;

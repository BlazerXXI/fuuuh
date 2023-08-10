"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

interface BurgerMenuProps {}

const BurgerMenu: React.FC<BurgerMenuProps> = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const menuRef = useRef<HTMLDivElement>(null);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		if (isOpen) {
			document.addEventListener("click", handleClickOutside);
		} else {
			document.removeEventListener("click", handleClickOutside);
		}
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [isOpen]);

	return (
		<div className="md:hidden" ref={menuRef}>
			<button
				onClick={toggleMenu}
				className="flex items-center gap-2 p-2 transition-colors duration-200 rounded focus:outline-none"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6 text-[#fffffff9] duration-600 animate-pulse"
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
				<div
					className={
						"absolute flex flex-col menuBlock gap-7 top-14 right-0 z-10 bg-[#191919f0] p-4 shadow-lg" +
						" " +
						`${isOpen ? "open-menu" : undefined}`
					}
				>
					<nav
						onClick={toggleMenu}
						className="flex flex-col gap-7 text-lg items-stretch"
					>
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
						<Link target="_blank" href="https://www.instagram.com/fuuuh_bar/">
							<Image
								src="/img/header/social/instagram.svg"
								className="hover:opacity-80"
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
								className="hover:opacity-80"
								src="/img/header/social/location.svg"
								width={24}
								height={24}
								alt="location dot"
							/>
						</Link>
						<Link target="_blank" href="tel:0959416670">
							<Image
								className="hover:opacity-80"
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

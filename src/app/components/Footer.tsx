"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className={"bg-[#00000020] px-4"}>
			<div>
				<div className="md:grid grid-cols-2 grid-rows-2 gap-5 items-baseline">
					<div>
						<h4 className="text-sm opacity-80">
							Ласкаво просимо! Замовляючи будь-яку позицію з нашого меню, ви
							автоматично залишаєте донати на допомогу нашій армії, адже цього
							року робота нашого бару буде зосереджена на наближення перемоги,
							тому весь прибуток буде спрямований на{" "}
							<strong>
								3 батальйон 92 бригади
								<span className="text-orange-400">&lsquo;CODE 9.2&lsquo;</span>
							</strong>
							. За бажання відправити додаткові кошти 92 бригаді на закупівлю
							ударних дронів, ми залишимо посилання на банку:
						</h4>
						<p className="text-sm mt-4 opacity-75">
							<br />
							<Link
								className="underline"
								target="_blank"
								href={"https://send.monobank.ua/jar/4aVw5zKYz1"}
							>
								Переказ коштів на <span className="text-orange-400">ЗСУ</span>
							</Link>
						</p>
					</div>
					<div className="mt-4 opacity-75 text-sm">
						<p>
							Якщо ви бажаєте придбати військові трофеї, ви можете це зробити
							тут:
						</p>
						<Link
							target="_blank"
							className="text-orange-400 underline"
							href={"https://t.me/trofeiukraine"}
						>
							Військові трофеї 🇺🇦
						</Link>
					</div>
					<div className="opacity-75 text-sm mt-4">
						<h4>
							Зі свого боку ми будемо ділитися з вами всією наданою допомогою
							для ЗСУ в нашому інстаграм
						</h4>
						<Link
							target="_blank"
							className="text-orange-400 underline"
							href={"https://instagram.com/fuuuh_bar"}
						>
							@fuuuh_bar
						</Link>
					</div>
					<div className="opacity-75 text-sm mt-4">
						<p> Дякуємо, що ви обрали нас!</p>
						<p> Все буде Україна!</p>
					</div>
				</div>
				<div className="flex gap-7 soc-menu justify-center mt-4">
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
			<div className="opacity-75 text-sm mt-6 text-center">
				<h3>
					<i>© Copyright Fuuuh Bar</i>
				</h3>
			</div>
		</footer>
	);
};

export default Footer;

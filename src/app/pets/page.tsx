import { MenuTypes } from "../types";
import menuData from "../menu.json";

const Pet = () => {
	return (
		<section id="pet">
			<div>
				<h2 className="title-section">Меню для маленьких друзів🐶</h2>
			</div>
			<ul className="grid md:grid-cols-2 lg:grid-cols-3 md:mt-12 mt-7 gap-16">
				{menuData.pets.map((item: MenuTypes, index: number) => (
					<li
						className="text-center flex flex-col items-center justify-content-center "
						key={index}
					>
						<div className="w-[300px] card-border flex flex-col grow gap-5">
							<div className="px-3 py-4 flex flex-col grow gap-5">
								<h4 className="text-title">{item.title}</h4>
								<p className="opacity-80">{item.description}</p>
								<p className="flex flex-col grow justify-end">{item.price}</p>
							</div>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Pet;

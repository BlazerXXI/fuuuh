import { MenuTypes } from "../types";
import { pets } from "../menu.json";

const Pet = () => {
	return (
		<section id="pet">
			<div>
				<h2 className="title-section">Меню для маленьких друзів</h2>
			</div>
			<div>
				<h3 className="sub-title-section">Меню для маленьких друзів🐶</h3>
			</div>
			<ul className="grid md:grid-cols-2 lg:grid-cols-4 md:mt-12 mt-7 gap-16">
				{pets.map((item: MenuTypes, index: number) => (
					<li
						className="text-center flex flex-col items-center justify-content-center "
						key={index}
					>
						<div className="w-[240px] card-border flex flex-col grow gap-5">
							<div className="px-3 py-4 flex flex-col grow gap-5">
								<h4 className="text-[#5e87c9]">{item.title}</h4>
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

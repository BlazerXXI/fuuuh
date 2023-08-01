import Image from "next/image";

const Food = () => {
	const menuItems = [
		{
			src: "/img/breakfast/syrnik.jpeg",
			title: "Сирники ФУУУХ",
			price: "155",
			description:
				"Ці сирники готуються у духовці . Подаються зі сметаною та варенням і є чудовим вибором для тих, хто любить солодкий сніданок.",
		},
		{
			src: "/img/breakfast/lenivy.jpeg",
			title: "Ліниві вареники із згущеним молоком",
			price: "145",
			description:
				"Ліниві вареники з згущеним молоком - це ситний і смачний варіант для сніданку або легкого обіду.",
		},
		{
			src: "/img/breakfast/omlet.jpeg",
			title: "Омлет з лососем, авокадо та моцареллою",
			price: "190",
			description:
				"Омлет з авокадо - це страва, яка додасть вам енергії та ситості на початку дня. ",
		},
		{
			src: "/img/breakfast/omlet.jpeg",
			title: "Омлет з сиром, куркою та грибами",
			price: "180",
			description:
				"Ситний та поживний сніданок, з підсмаженою курочкою та зеленню.",
		},
	];

	return (
		<section id="food">
			<div>
				<h2 className="title-section">Їжа</h2>
			</div>
			<div>
				<h3 className="sub-title-section">Сніданки (весь день)</h3>
			</div>
			<ul className="grid md:grid-cols-2 lg:grid-cols-4 md:mt-12 mt-7 gap-16">
				{menuItems.map((item, index) => (
					<li
						className="text-center flex flex-col items-center justify-content-center "
						key={index}
					>
						<div className="max-w-[240px] card-border flex flex-col grow gap-5">
							{item.src ? (
								<div>
									<Image
										className="rounded-lg"
										src={item.src}
										alt={`блюдо` + " " + item.title}
										width={240}
										height={300}
									/>
								</div>
							) : null}
							<div className="px-3 pb-4 flex flex-col grow gap-5">
								<h4 className="text-[#5e87c9]">{item.title}</h4>
								<p className="opacity-80">{item.description}</p>
								<p className="flex flex-col grow justify-end">
									{item.price} грн
								</p>
							</div>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Food;

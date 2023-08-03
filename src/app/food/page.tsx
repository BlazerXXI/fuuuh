import Breakfast from "./breakfast/page";
import Snacks from "./snacks/page";

const Food = () => {
	return (
		<section id="food">
			<div>
				<h2 className="title-section">Їжа</h2>
			</div>
			<Breakfast />
			<Snacks />
		</section>
	);
};

export default Food;

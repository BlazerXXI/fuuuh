import Breakfast from "./breakfast/page";
import MainDishes from "./mainDishes/page";
import Salats from "./salats/page";
import Snacks from "./snacks/page";
import Soups from "./soups/page";

const Food = () => {
	return (
		<section id="food">
			<div>
				<h2 className="title-section">Їжа</h2>
			</div>
			<Breakfast />
			<Snacks />
			<Soups />
			<Salats />
			<MainDishes />
		</section>
	);
};

export default Food;
